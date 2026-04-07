TRUNCATE posts RESTART IDENTITY;

INSERT INTO posts (title, body, author, image_url)
VALUES
(
  'My Closet Is a Black Hole',
  'I swear clothes disappear in there like socks in a dryer.',
  'Fashion Disaster',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b'
),
(
  'Why Do Jeans Fit Differently Every Time?',
  'I swear my jeans have a personal vendetta...',
  'A Fashion Victim',
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b'
),
(
  'The Secret War Between Me and My Laundry Basket',
  'My laundry basket is never empty...',
  'Laundry Survivor',
  'https://images.unsplash.com/photo-1585386959984-a4155224a1ad'
),
(
  'Clothes I Bought Because of Instagram and Immediately Regretted',
  'Influencers: 1. Me: 0...',
  'Impulse Buyer',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
);
