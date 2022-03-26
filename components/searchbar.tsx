import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Searchbar = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.target.reset();

    router.push({
      pathname: `/users/${username}/repos`
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          placeholder="username"
          onChange={(event) => setUsername(event.currentTarget.value)}
        />
        <InputRightElement>
          <IconButton
            type="submit"
            aria-label="Search user"
            icon={<SearchIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default Searchbar;
