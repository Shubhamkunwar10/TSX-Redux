import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { useTransition, animated, config } from 'react-spring';

interface AnimatedDialogProps {
  onSubmit: (event: React.FormEvent) => void;
  children: React.ReactNode;
  isOpen?:boolean
}

const AnimatedDialog: React.FC<AnimatedDialogProps> = ({isOpen, onSubmit, children }) => {
  const [open, setOpen] = React.useState(isOpen || false);

  const transitions = useTransition(open, {
    from: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 10 },
    leave: { opacity: 0, y: 10 },
    config: config.stiff,
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* <Dialog.Trigger>Open Dialog</Dialog.Trigger> */}
      {transitions((styles, item) =>
        item ? (
          <>
            <Dialog.Overlay forceMount asChild>
              <animated.div style={{ opacity: styles.opacity }} />
            </Dialog.Overlay>
            <Dialog.Content forceMount asChild>
              <animated.div style={styles}>
                <form onSubmit={(e) => { onSubmit(e); handleClose(); }}>
                  {children}
                  <button type="submit">Submit</button>
                </form>
                <Dialog.Close>Close</Dialog.Close>
              </animated.div>
            </Dialog.Content>
          </>
        ) : null
      )}
    </Dialog.Root>
  );
};

export default AnimatedDialog;