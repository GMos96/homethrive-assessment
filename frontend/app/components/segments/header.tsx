import { MdMedication } from 'react-icons/md';
import { Heading, HStack, Show } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext, AuthDispatchContext } from '@/core/context/auth.context';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';

export const Header = () => {
  const isAuthenticated = useContext(AuthContext);
  const setAuthenticated = useContext(AuthDispatchContext);

  const navigate = useNavigate();

  const logOut = () => {
    setAuthenticated(false);
    navigate('/login');
  };

  return (
    <nav className="flex min-h-[4rem] max-h-[4rem] bg-white grow justify-between items-center gap-5">
      <HStack gap={2} marginLeft={5}>
        <MdMedication size={'3rem'} color={'red'}></MdMedication>
        <Heading size="lg">Homethrive Assessment</Heading>
      </HStack>
      <HStack gap={2} marginRight={5}>
        <Show when={isAuthenticated}>
          <Button onClick={() => logOut()}>Log Out</Button>
        </Show>
        <Show when={!isAuthenticated}>
          <Button onClick={() => navigate('/login')}>Login</Button>
        </Show>
      </HStack>
    </nav>
  );
};
