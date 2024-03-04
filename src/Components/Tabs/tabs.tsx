import React, { ReactNode } from 'react';
import { Tabs, Container, Box } from '@radix-ui/themes';

interface CustomTabProps {
  tabs: { value: ReactNode; content: ReactNode; label: string }[];
}

const CustomTab: React.FC<CustomTabProps> = ({ tabs }) => {
  const firstTabValue = tabs.length > 0 ? tabs[0].label : undefined;
  return (
    <Container>
      <Box>
        <Tabs.Root defaultValue={firstTabValue}>
        <Tabs.List >
            {tabs.map(({ label, value }) => (
              <Tabs.Trigger key={label} value={label} className='w-1/4 h-12 bg-orange border flex justify-center items-center '>
                <span>{value}</span>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabs.map(({ content, label }) => (
            <Tabs.Content className='w-full' key={label} value={label}>
              {content}
            </Tabs.Content>
          ))}


        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default CustomTab;