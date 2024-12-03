import React, { useState } from "react";
import { Box, Collapsible, Spinner, Text } from "@chakra-ui/react";
const KeyWordsModel = ({
  keywords,
  loading,
  isOpen,
  closeModal,
  dummyText,
}) => {
  const [open, setOpen] = useState(true);

  console.log({ keywords });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Collapsible.Root defaultOpen={true} marginBottom={6} height={200}>
          <Collapsible.Trigger paddingY="3">Response</Collapsible.Trigger>
          <Collapsible.Content open={true}>
            <Text>{keywords}</Text>
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </>
  );
};

export default KeyWordsModel;
