import { Grid, GridItem, Hide } from '@chakra-ui/react';
import React from 'react';
import WebCard from './web-card';

const OfficialWeb = () => {
  return (
    <Hide below="md">
      <Grid templateColumns="repeat(5, 1fr)" gap={2} bg="gray.900" p={4}>
        <GridItem>
          <WebCard href="https://github.com/explore" title="Explore">
            Here&apos;s what&apos;s popular on GitHub today...
          </WebCard>
        </GridItem>
        <GridItem>
          <WebCard href="https://github.com/topics" title="Topics">
            Browse popular topics on GitHub.
          </WebCard>
        </GridItem>
        <GridItem>
          <WebCard href="https://github.com/trending" title="Trending">
            See what the GitHub community is most excited about today.
          </WebCard>
        </GridItem>
        <GridItem>
          <WebCard href="https://github.com/collections" title="Collections">
            Curated lists and insight into burgeoning industries, topics, and
            communities.
          </WebCard>
        </GridItem>
        <GridItem>
          <WebCard href="https://github.com/events" title="Events">
            Connect with the GitHub community at conferences, meetups, and
            hackathons around the world.
          </WebCard>
        </GridItem>
      </Grid>
    </Hide>
  );
};

export default OfficialWeb;
