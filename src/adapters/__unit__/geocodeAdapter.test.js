import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE, DEFAULT_CITY, DEFAULT_COUNTRY } from '../../constants/constants';

describe('geocodeAdapter', () => {
  test('default', async () => {
    // Arrange
    const expectedLat = DEFAULT_LATITUDE;
    const expectedLng = DEFAULT_LONGITUDE;
    const expectedGeocodeObject = [
      {
        address_components: [
          { long_name: '8', short_name: '8', types: ['street_number'] },
          {
            long_name: 'улица Шейнкмана',
            short_name: 'ул. Шейнкмана',
            types: ['route'],
          },
          {
            long_name: DEFAULT_CITY,
            short_name: 'Казань',
            types: ['locality', 'political'],
          },
          {
            long_name: 'Вахитовский',
            short_name: 'Вахитовский',
            types: ['administrative_area_level_3', 'political'],
          },
          {
            long_name: 'город Казань',
            short_name: 'г. Казань',
            types: ['administrative_area_level_2', 'political'],
          },
          {
            long_name: 'Республика Татарстан',
            short_name: 'Респ. Татарстан',
            types: ['administrative_area_level_1', 'political'],
          },
          {
            long_name: DEFAULT_COUNTRY,
            short_name: 'RU',
            types: ['country', 'political'],
          },
          { long_name: '420014', short_name: '420014', types: ['postal_code'] },
        ],
        formatted_address:
          'ул. Шейнкмана, 8, Казань, Респ. Татарстан, Россия, 420014',
        geometry: {
          location: { lat: 55.796577, lng: 49.10808650000001 },
          location_type: 'ROOFTOP',
          viewport: {
            south: 55.7952280197085,
            west: 49.10673751970853,
            north: 55.7979259802915,
            east: 49.109435480291495,
          },
        },
        place_id: 'ChIJsQnrAD2tXkERK30h9lzqp1A',
        plus_code: {
          compound_code: 'Q4W5+J6 Казань, Республика Татарстан, Россия',
          global_code: '9H7FQ4W5+J6',
        },
        types: ['street_address'],
      },
    ];
    const expectedAddress = { city: DEFAULT_CITY, country: DEFAULT_COUNTRY };

    const mockGeocodeApi = jest.fn(() => new Promise((resolve) => { resolve(expectedGeocodeObject); }));
    jest.mock('../../services/geocodeApi', () => mockGeocodeApi);
    const geocodeAdapter = require('../geocodeAdapter').default;

    // Act
    const actualAddress = await geocodeAdapter(expectedLat, expectedLng);

    // Assert
    expect(actualAddress).toEqual(expectedAddress);
    expect(mockGeocodeApi).toBeCalledWith(expectedLat, expectedLng);
  });
});
