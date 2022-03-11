/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function Frame23(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      gap="40px"
      direction="column"
      height="498px"
      overflow="hidden"
      position="relative"
      padding="193px 81px 193px 81px"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="700"
        color="rgba(92.00000211596489,102.00000151991844,112.000000923872,1)"
        lineHeight="46.875px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        children="Hit  ‘f’ to make a frame"
        {...getOverrideProps(overrides, "Flex.Text[0]")}
      ></Text>
      <Button
        display="flex"
        shrink="0"
        width="206px"
        size="large"
        variation="primary"
        children="Primary Button"
        {...getOverrideProps(overrides, "Flex.Button[0]")}
      ></Button>
    </Flex>
  );
}
