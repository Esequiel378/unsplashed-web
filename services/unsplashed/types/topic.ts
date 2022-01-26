interface Links {
  self: string;
  html: string;
  photos: string;
}

interface OwnerLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

interface Owner {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name?: any;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location?: any;
  links: OwnerLinks;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface CoverPhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Spirituality {
  status: string;
  approved_on: Date;
}

interface Holidays {
  status: string;
  approved_on: Date;
}

interface TopicSubmissions {
  spirituality: Spirituality;
  holidays: Holidays;
}

interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface UserProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Social2 {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email?: any;
}

interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: UserProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social2;
}

interface CoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: CoverPhotoLinks;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: TopicSubmissions;
  user: User;
}

interface PreviewPhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface PreviewPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  urls: PreviewPhotoUrls;
}

export interface Topics {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: Date;
  updated_at: Date;
  starts_at: Date;
  ends_at: Date;
  only_submissions_after?: any;
  featured: boolean;
  total_photos: number;
  current_user_contributions: any[];
  total_current_user_submissions?: any;
  links: Links;
  status: string;
  owners: Owner[];
  cover_photo: CoverPhoto;
  preview_photos: PreviewPhoto[];
}

export interface PaginatedTopics {
  total: number;
  total_pages: number;
  results: Topics[];
}
