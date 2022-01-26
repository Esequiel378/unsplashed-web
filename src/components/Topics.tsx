import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useTopicsList } from 'services/unsplashed/topics';
import { PaginatedTopics, Topics } from 'services/unsplashed/types';
import usePaginatedResponseList from 'src/hooks/usePaginatedResponseList';

interface LinkTabProps {
  label: string;
  href: string;
}

const LinkTab = (props: LinkTabProps) => {
  const router = useRouter();
  const { href } = props;

  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        router.push(href);
      }}
      {...props}
    />
  );
};

const Topics = () => {
  const { data: topics } = usePaginatedResponseList<Topics, PaginatedTopics>({
    fetchWith: useTopicsList,
    config: {
      params: {
        per_page: 30,
      },
    },
  });

  const [value, setValue] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="auto" aria-label="topics">
        {topics?.map((topic: Topics) => (
          <LinkTab label={topic.title} href={`/topics/${topic.slug}`} />
        ))}
      </Tabs>
    </Box>
  );
};

export default Topics;
