'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';

const supabase = createClientComponentClient();

interface ViewCounterProps {
  slug: string;
  noCount?: boolean;
  showCount?: boolean;
}

const ViewCounter = ({
  slug,
  noCount = false,
  showCount = true,
}: ViewCounterProps) => {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        const { error } = await supabase.rpc('increment', {
          slug_text: slug,
        });

        if (error) {
          console.error(
            'Error incrementing view count inside try block:',
            error,
          );
        }
      } catch (error) {
        console.error(
          'An error occurred while incrementing the view count:',
          error,
        );
      }
    };

    if (!noCount) {
      incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        const { data, error } = await supabase
          .from('views')
          .select('count')
          .match({ slug })
          .single();

        if (error) {
          console.error('Error retrieving view count:', error);
        }

        setViews(data ? data.count : 0);
      } catch (error) {
        console.error(
          'An error occurred while retrieving the view count:',
          error,
        );
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
