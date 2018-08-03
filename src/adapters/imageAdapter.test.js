describe('imageAdapter', () => {
  test('default', async () => {
    // arrange
    const expectedWeatherDescription = 'Sunny';
    const expectedImageUrl = 'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIyODM0fQ&s=ccbf560869799321eebf9150b7b864ff';
    const expectedUserLink = 'https://unsplash.com/@lukaszlada';
    const expectedUserName = 'Vladimir Vladimirovich';
    const expectedRawImageData = {
      data: {
        id: 'LtWFFVi1RXQ',
        created_at: '2017-06-02T20:45:30-04:00',
        updated_at: '2018-08-01T04:06:32-04:00',
        width: 3445,
        height: 2297,
        color: '#473D66',
        description: null,
        urls: {
          raw:
            'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjIyODM0fQ&s=421bfb4d003d5355a374f6bb163ae3a3',
          full:
            'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIyODM0fQ&s=94c94d23b0c1ed07d3b386440466c2b6',
          regular: expectedImageUrl,
          small:
            'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjIyODM0fQ&s=804a5a3ec616aec83c99a8e06ca17192',
          thumb:
            'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjIyODM0fQ&s=1fad8916ef39c3da2fb4e8572b0d6d8e',
          custom:
            'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=600&fit=crop&ixid=eyJhcHBfaWQiOjIyODM0fQ&s=64bd3ffa759d0f50261c4c64abea7c98',
        },
        links: {
          self: 'https://api.unsplash.com/photos/LtWFFVi1RXQ',
          html: 'https://unsplash.com/photos/LtWFFVi1RXQ',
          download: 'https://unsplash.com/photos/LtWFFVi1RXQ/download',
          download_location: 'https://api.unsplash.com/photos/LtWFFVi1RXQ/download',
        },
        categories: [],
        sponsored: false,
        likes: 412,
        liked_by_user: false,
        current_user_collections: [],
        slug: null,
        user: {
          id: 'yKcHYeBdZUQ',
          updated_at: '2018-07-21T06:54:50-04:00',
          username: 'lukaszlada',
          name: expectedUserName,
          first_name: '\u0141ukasz',
          last_name: '\u0141ada',
          twitter_username: 'lukaszlada',
          portfolio_url: null,
          bio: null,
          location: 'Poland',
          links: {
            self: 'https://api.unsplash.com/users/lukaszlada',
            html: expectedUserLink,
            photos: 'https://api.unsplash.com/users/lukaszlada/photos',
            likes: 'https://api.unsplash.com/users/lukaszlada/likes',
            portfolio: 'https://api.unsplash.com/users/lukaszlada/portfolio',
            following: 'https://api.unsplash.com/users/lukaszlada/following',
            followers: 'https://api.unsplash.com/users/lukaszlada/followers',
          },
          profile_image: {
            small:
              'https://images.unsplash.com/profile-1453672662544-3c7fdd937ad4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=b782abb464de5f38dffd72bf7eae535b',
            medium:
              'https://images.unsplash.com/profile-1453672662544-3c7fdd937ad4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=73dfaa9ab7c043bb29d475202ecda30b',
            large:
              'https://images.unsplash.com/profile-1453672662544-3c7fdd937ad4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=3369d77f298d7423a9eece65cef594ab',
          },
          instagram_username: 'luk1803',
          total_collections: 2,
          total_likes: 477,
          total_photos: 21,
        },
        exif: {
          make: 'NIKON CORPORATION',
          model: 'NIKON D5000',
          exposure_time: '1/160',
          aperture: '9.0',
          focal_length: '80.0',
          iso: 200,
        },
        views: 860387,
        downloads: 11361,
      },
    };

    const expectedImageData = {
      imageUrl: expectedImageUrl,
      userUrl: expectedUserLink,
      userName: expectedUserName,
    };

    const mockFetchImage = jest.fn(() => new Promise((resolve) => { resolve(expectedRawImageData); }));
    jest.mock('../services/imageApi', () => mockFetchImage);
    const imageAdapter = require('./imageAdapter').default;
    // act
    const actualImageData = await imageAdapter(expectedWeatherDescription);
    // assert
    expect(actualImageData).toEqual(expectedImageData);
    expect(mockFetchImage).toBeCalledWith(expectedWeatherDescription);
  });
});
