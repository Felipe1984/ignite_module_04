import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
   showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
   return (
      <Flex align="center">
         {showProfileData && (
            <Box mr="4" textAlign="right">
               <Text>Felipe dos Anjos</Text>
               <Text color="gray.300" fontSize="small">
                  felipe@teste.com.br
               </Text>
            </Box>
         )}

         <Avatar size="md" name="Felipe Anjos" src="https://github.com./Felipe1984.png"/>
      </Flex>
   );
}