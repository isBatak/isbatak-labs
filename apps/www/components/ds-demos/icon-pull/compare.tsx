import { Flex } from "@isbatak/react-ui/flex"
import { Icon } from "@isbatak/react-ui/icon"
import { Text } from "@isbatak/react-ui/text"

export function IconPullCompareDemo() {
  return (
    <Flex wrap="wrap" justifyContent="center" gap="8">
      <Flex direction="column" alignItems="center" gap="3">
        <Flex
          alignItems="center"
          gap="2"
          h="12"
          px="5"
          borderWidth="1px"
          rounded="l2"
          textStyle="sm"
          fontWeight="medium"
        >
          <Icon name="plus" size="md" iconPullStart="0" />
          New file
        </Flex>
        <Flex
          alignItems="center"
          gap="2"
          h="12"
          px="5"
          borderWidth="1px"
          rounded="l2"
          textStyle="sm"
          fontWeight="medium"
        >
          Continue
          <Icon name="arrow-right" size="md" iconPullEnd="0" />
        </Flex>
        <Text textStyle="xs" fontFamily="mono" color="fg.muted">
          iconPullStart=&quot;0&quot;
        </Text>
      </Flex>
      <Flex direction="column" alignItems="center" gap="3">
        <Flex
          alignItems="center"
          gap="2"
          h="12"
          px="5"
          borderWidth="1px"
          rounded="l2"
          textStyle="sm"
          fontWeight="medium"
        >
          <Icon name="plus" size="md" iconPullStart="1" />
          New file
        </Flex>
        <Flex
          alignItems="center"
          gap="2"
          h="12"
          px="5"
          borderWidth="1px"
          rounded="l2"
          textStyle="sm"
          fontWeight="medium"
        >
          Continue
          <Icon name="arrow-right" size="md" iconPullEnd="1" />
        </Flex>
        <Text textStyle="xs" fontFamily="mono" color="fg.muted">
          iconPullStart=&quot;1&quot;
        </Text>
      </Flex>
    </Flex>
  )
}
