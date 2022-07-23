import React, { useRef, useState } from 'react';
import { Flex, Spacer, useDisclosure } from '@chakra-ui/react';
import { Stack, HStack, VStack, Button,Box, Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import './Navbar.css';
import{ChevronDownIcon} from '@chakra-ui/icons';
import {auth} from '../../firebase/Firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import SignupBox from '../Auth/SignupBox';
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [goingUp, setGoingUp] = useState(false);
  const handleScroll = ()=>{
    if(window.scrollY>=104){
      setGoingUp(true);
      console.log(goingUp);
    }
    else{
      setGoingUp(false);
    }
   
  }
  const loginWithGoogle = ()=>{
    console.log('login')
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth,provider)
  .then((res)=>{
    console.log(res.user.email);
  })
  .catch((err)=>{
    console.log(err);
  })

  }
  window.addEventListener('scroll',handleScroll);
  return (
    <>
    <Modal isOpen={isOpen} border={"1px solid red"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign={'center'}>Get started today</ModalHeader>
          <ModalCloseButton onClick={onClose}/>
          <ModalBody>
           <SignupBox loginWithGoogle= {loginWithGoogle}/>
          </ModalBody>
        </ModalContent>
      </Modal>
    <Flex className={goingUp?"shadow_btm":null} pos="fixed" top="0" left="0" zIndex={2} w="100%" h="104" bg='white' px="6%" alignItems='center' justifyContent='space-arround'>
      <Box cursor="pointer">
      <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNTgwLjkxIDM4MS41MiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMDZiZmY7fS5jbHMtMntmaWxsOiMwYWU4ZjA7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PGcgaWQ9IldvcmRtYXJrIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik05MzguNDYsMTUwLjU0YzI0LjUyLDAsNDcuNzQsMTUsNTIuNjQsNDcuNDFIODgxLjljNC41Ny0yOC40NCwyNS44My00Ny40MSw1Ni41Ni00Ny40MW00OS4xNSw5NS4zNmMtOC4zNCwxMy0yNC40NiwyMy00Ni41MywyMy0zMC40MSwwLTUzLjYzLTE2LjY3LTU5LjE4LTQ2LjFoMTM3YTgzLDgzLDAsMCwwLDEtMTIuNzVjMC00NS43Ny0zMi04Ni4zMi04MS40Mi04Ni4zMi01MSwwLTg1LjY2LDM3LjYtODUuNjYsODYsMCw0OSwzNSw4Niw4Ny42Miw4NiwzMi43LDAsNTcuNTUtMTQuNzIsNzEuOTMtMzdaIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI4MTAuOTIiIHk9IjUyLjc4IiB3aWR0aD0iMjguNDQiIGhlaWdodD0iMjM4LjY5Ii8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTE3OC4xNSwxOTEuMDlWMjkxLjQ2SDExNDkuN1YxOTIuNzJjMC0yNi44MS0xNS4zNi00MS44NS00MC41NC00MS44NS0yNi4xNiwwLTQ3LjQxLDE1LjM3LTQ3LjQxLDUzLjk1djg2LjY0SDEwMzMuM1YxMjhoMjguNDV2MjMuNTRjMTIuMS0xOS4yOSwzMC4wOC0yNy43OSw1My0yNy43OSwzOC4yNSwwLDYzLjQzLDI1LjUsNjMuNDMsNjcuMzYiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMzM1LDIwOS43MmMwLTMzLjM1LTI1LjE4LTU4LjUzLTU4LjItNTguNTMtMzIuNywwLTU3Ljg3LDI1LjE4LTU3Ljg3LDU4LjUzczI1LjE3LDU4LjUzLDU3Ljg3LDU4LjUzYzMzLDAsNTguMi0yNS4xOCw1OC4yLTU4LjUzbTI4LjQ0LTE1Ni45NFYyOTEuNDdIMTMzNVYyNjMuMzRjLTEzLjA4LDIwLTM0LDMyLjM4LTYxLjgsMzIuMzgtNDUuNDUsMC04Mi43Mi0zNy42MS04Mi43Mi04NnMzNy4yNy04Niw4Mi43Mi04NmMyNy43OSwwLDQ4LjcyLDEyLjQyLDYxLjgsMzIuMzdWNTIuNzhaIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxMzg2LjM4IiB5PSI1Mi43OCIgd2lkdGg9IjI4LjQ0IiBoZWlnaHQ9IjIzOC42OSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTc2MC4yMiwyMDkuNzJjMC0zMy4zNS0yNS4xNy01OC41My01OC4yLTU4LjUzLTMyLjY5LDAtNTcuODcsMjUuMTgtNTcuODcsNTguNTNzMjUuMTgsNTguNTMsNTcuODcsNTguNTNjMzMsMCw1OC4yLTI1LjE4LDU4LjItNTguNTNNNzg4LjY3LDEyOFYyOTEuNDZINzYwLjIyVjI2My4zNGMtMTMuMDgsMjAtMzQsMzIuMzgtNjEuNzksMzIuMzgtNDUuNDUsMC04Mi43My0zNy42MS04Mi43My04NnMzNy4yOC04Niw4Mi43My04NmMyNy43OSwwLDQ4LjcxLDEyLjQyLDYxLjc5LDMyLjM3VjEyOFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01NzMuNTEsMjYwYTg4LjUzLDg4LjUzLDAsMSwxLDI1LjYtMTUxLjQyLDg3LDg3LDAsMCwxLDEzLjQ4LDEzLjkybDI0LjYxLTE4YTExOS4xNywxMTkuMTcsMCwxLDAtMjEuNzIsMTY2LjY1TDU5OS4xLDI0NS4yNUE4OS4zMiw4OS4zMiwwLDAsMSw1NzMuNTEsMjYwIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTU1Mi4xMiwxMjh2OTIuNzhjMCwzMC0xNy40NSw0OS00NC4wOSw0OXMtNDUuOTMtMTktNDUuOTMtNDlWMTI4aC0yOC43OHY5MGMwLDQ3LjE2LDI5LjM5LDc3Ljc4LDc0LjcxLDc3Ljc4LDM5LjIsMCw0NS4zMi0yNC44LDQ1LjMyLTI1LjQydjMzLjM4YzAsMzMuMDctMTQuMzksNTEuNzUtNDQuNCw1MS43NWE0NC4xOSw0NC4xOSwwLDAsMS00NC0zOC4ybC0yNS43Myw5QTcxLjUzLDcxLjUzLDAsMCwwLDE1MDksMzgxLjUyYzQ2LjU0LDAsNzItMzAuNjMsNzItNzcuNzhWMTI4WiIvPjwvZz48ZyBpZD0iQnJhbmRfbWFyayIgZGF0YS1uYW1lPSJCcmFuZCBtYXJrIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yMzEuNTgsMjIzLjIzQzIyMC42NSwyMzIuOTMsMjA3LDI0NSwxODIuMjUsMjQ1aC0xNC44Yy0xNy45MSwwLTM0LjItNi41MS00NS44Ni0xOC4zMS0xMS4zOS0xMS41My0xNy42Ni0yNy4zMS0xNy42Ni00NC40NFYxNjJjMC0xNy4xMyw2LjI3LTMyLjkxLDE3LjY2LTQ0LjQ0LDExLjY2LTExLjgsMjcuOTUtMTguMyw0NS44Ni0xOC4zaDE0LjhjMjQuNzgsMCwzOC40LDEyLjA2LDQ5LjMzLDIxLjc2LDExLjM1LDEwLDIxLjE0LDE4Ljc0LDQ3LjI1LDE4Ljc0YTc1LjExLDc1LjExLDAsMCwwLDExLjg5LS45NWwtLjA5LS4yM2E4OS41Myw4OS41MywwLDAsMC01LjQ5LTExLjI4TDI2Ny42OSw5Ny4wN2E4OS42NSw4OS42NSwwLDAsMC03Ny42NC00NC44MkgxNTUuMTRBODkuNjUsODkuNjUsMCwwLDAsNzcuNSw5Ny4wN0w2MC4wNSwxMjcuM2E4OS42Nyw4OS42NywwLDAsMCwwLDg5LjY1TDc3LjUsMjQ3LjE4QTg5LjY1LDg5LjY1LDAsMCwwLDE1NS4xNCwyOTJoMzQuOTFhODkuNjUsODkuNjUsMCwwLDAsNzcuNjQtNDQuODJMMjg1LjE0LDIxN2E4OS41Myw4OS41MywwLDAsMCw1LjQ5LTExLjI4bC4wOS0uMjJhNzQsNzQsMCwwLDAtMTEuODktMWMtMjYuMTEsMC0zNS45LDguNjktNDcuMjUsMTguNzQiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xODIuMjUsMTE3LjYxaC0xNC44Yy0yNy4yNiwwLTQ1LjE3LDE5LjQ3LTQ1LjE3LDQ0LjM5djIwLjI1YzAsMjQuOTIsMTcuOTEsNDQuMzksNDUuMTcsNDQuMzloMTQuOGMzOS43MiwwLDM2LjYtNDAuNSw5Ni41OC00MC41YTkxLjY0LDkxLjY0LDAsMCwxLDE2Ljk0LDEuNTYsODkuNTQsODkuNTQsMCwwLDAsMC0zMS4xNSw5Mi41MSw5Mi41MSwwLDAsMS0xNi45NCwxLjU2Yy02MCwwLTU2Ljg2LTQwLjUtOTYuNTgtNDAuNSIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzMC4yMywyMDIuNWE4My42Miw4My42MiwwLDAsMC0zNC40NS0xNC44MWMwLC4xMSwwLC4yLDAsLjNhODkuNyw4OS43LDAsMCwxLTUsMTcuNDUsNjUuNTgsNjUuNTgsMCwwLDEsMjguNDgsMTEuNzNjMCwuMDgtLjA1LjE4LS4wOC4yN2ExNTMuNTcsMTUzLjU3LDAsMSwxLDAtOTAuNjNjMCwuMDkuMDUuMTkuMDguMjdhNjUuNDUsNjUuNDUsMCwwLDEtMjguNDgsMTEuNzIsOTAuMyw5MC4zLDAsMCwxLDUsMTcuNDcsMi4zMywyLjMzLDAsMCwwLDAsLjI4LDgzLjYsODMuNiwwLDAsMCwzNC40NS0xNC44YzkuODItNy4yNyw3LjkyLTE1LjQ4LDYuNDMtMjAuMzRhMTcyLjEzLDE3Mi4xMywwLDEsMCwwLDEwMS40M2MxLjQ5LTQuODYsMy4zOS0xMy4wNy02LjQzLTIwLjM0Ii8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjkwLjcyLDEzOC44YTc0LDc0LDAsMCwxLTExLjg5LDFjLTI2LjExLDAtMzUuOS04LjY5LTQ3LjI0LTE4Ljc0LTEwLjk0LTkuNy0yNC41Ni0yMS43Ny00OS4zNC0yMS43N2gtMTQuOGMtMTcuOTIsMC0zNC4yLDYuNTEtNDUuODYsMTguMzEtMTEuMzksMTEuNTMtMTcuNjYsMjcuMzEtMTcuNjYsNDQuNDR2MjAuMjVjMCwxNy4xMyw2LjI3LDMyLjkxLDE3LjY2LDQ0LjQ0LDExLjY2LDExLjgsMjcuOTQsMTguMyw0NS44NiwxOC4zaDE0LjhjMjQuNzgsMCwzOC40LTEyLjA2LDQ5LjM0LTIxLjc2LDExLjM0LTEwLDIxLjEzLTE4Ljc0LDQ3LjI0LTE4Ljc0YTc1LjExLDc1LjExLDAsMCwxLDExLjg5Ljk1LDg5LDg5LDAsMCwwLDUtMTcuNDUsMi42OCwyLjY4LDAsMCwwLDAtLjMsOTIuNTEsOTIuNTEsMCwwLDAtMTYuOTQtMS41NWMtNjAsMC01Ni44Niw0MC41MS05Ni41OCw0MC41MWgtMTQuOGMtMjcuMjYsMC00NS4xNy0xOS40OC00NS4xNy00NC40VjE2MmMwLTI0LjkyLDE3LjkxLTQ0LjM5LDQ1LjE3LTQ0LjM5aDE0LjhjMzkuNzIsMCwzNi42LDQwLjQ5LDk2LjU4LDQwLjQ5YTkxLjY0LDkxLjY0LDAsMCwwLDE2Ljk0LTEuNTVjMC0uMDksMC0uMTgsMC0uMjhhOTAuMyw5MC4zLDAsMCwwLTUtMTcuNDciLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0yOTAuNzIsMTM4LjhhNzQsNzQsMCwwLDEtMTEuODksMWMtMjYuMTEsMC0zNS45LTguNjktNDcuMjQtMTguNzQtMTAuOTQtOS43LTI0LjU2LTIxLjc3LTQ5LjM0LTIxLjc3aC0xNC44Yy0xNy45MiwwLTM0LjIsNi41MS00NS44NiwxOC4zMS0xMS4zOSwxMS41My0xNy42NiwyNy4zMS0xNy42Niw0NC40NHYyMC4yNWMwLDE3LjEzLDYuMjcsMzIuOTEsMTcuNjYsNDQuNDQsMTEuNjYsMTEuOCwyNy45NCwxOC4zLDQ1Ljg2LDE4LjNoMTQuOGMyNC43OCwwLDM4LjQtMTIuMDYsNDkuMzQtMjEuNzYsMTEuMzQtMTAsMjEuMTMtMTguNzQsNDcuMjQtMTguNzRhNzUuMTEsNzUuMTEsMCwwLDEsMTEuODkuOTUsODksODksMCwwLDAsNS0xNy40NSwyLjY4LDIuNjgsMCwwLDAsMC0uMyw5Mi41MSw5Mi41MSwwLDAsMC0xNi45NC0xLjU1Yy02MCwwLTU2Ljg2LDQwLjUxLTk2LjU4LDQwLjUxaC0xNC44Yy0yNy4yNiwwLTQ1LjE3LTE5LjQ4LTQ1LjE3LTQ0LjRWMTYyYzAtMjQuOTIsMTcuOTEtNDQuMzksNDUuMTctNDQuMzloMTQuOGMzOS43MiwwLDM2LjYsNDAuNDksOTYuNTgsNDAuNDlhOTEuNjQsOTEuNjQsMCwwLDAsMTYuOTQtMS41NWMwLS4wOSwwLS4xOCwwLS4yOGE5MC4zLDkwLjMsMCwwLDAtNS0xNy40NyIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" h="40px" w="auto" alt='Dan Abramov' />
      </Box>
      <Spacer/>
      <HStack display="flex" justifyContent="space-around" spacing={10}>
        <Text fontSize='18px' fontWeight='bold'_hover={{color:"#006BFF"}}>Individuals</Text>
        <Text fontSize='18px' fontWeight='bold'_hover={{color:"#006BFF"}}>Teams</Text>
        <Text fontSize='18px' fontWeight='bold'_hover={{color:"#006BFF"}}>Enterprise</Text>
        <Text fontSize='18px' fontWeight='bold'_hover={{color:"#006BFF"}}>Product<ChevronDownIcon/></Text>
        <Text fontSize='18px' fontWeight='bold'_hover={{color:"#006BFF"}}>Pricing</Text>
        <Text fontSize='18px' fontWeight='bold'_hover={{color:"#006BFF"}}>Resources<ChevronDownIcon/></Text>
      </HStack>
      <Spacer/>
      <Box>
      <Button onClick={onOpen} colorScheme={"messenger"} variant='solid' w="131px" height="51px" borderRadius="39px" >My Account</Button>
      </Box>
    </Flex>
    </>
    
  )
}
