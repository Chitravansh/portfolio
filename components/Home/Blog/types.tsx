export type DevToBlog = {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  url: string;
  readable_publish_date: string;
  reading_time_minutes: number;
  positive_reactions_count: number;
  tag_list: string[];
};
