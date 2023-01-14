import styled from '@emotion/styled';
import { Button, Container } from '@mui/material';
import { useEffect } from 'react';

import FollowList from '../components/Follow/FollowingList';
import useGetFollow from '../hooks/useGetFollow';

const Following = () => {
  const { followingIdList, loading, getUserInfo, handleClick } = useGetFollow();

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <Container>
      {loading ? (
        <div>loading...</div>
      ) : (
        followingIdList.map((following) => (
          <Wrapper key={following._id}>
            <FollowList src={following.image} fullName={following.fullName} />
            <Button
              variant='outlined'
              size='small'
              sx={{
                height: '30px',
                width: '100px',
                marginRight: '0.5rem',
                padding: '0.5rem',
                boxSizing: 'border-box',
              }}
              data-followid={following._id}
              data-userid={following.user}
              onClick={handleClick}>
              삭제
            </Button>
          </Wrapper>
        ))
      )}
    </Container>
  );
};

export default Following;

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  border: 2px solid gray;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
`;