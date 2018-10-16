import { DEFAULT_LATITUDE, DEFAULT_LONGITUDE, DEFAULT_CITY, DEFAULT_COUNTRY } from '../../constants/constants';

describe('geocodeAdapter', () => {
  test('default', async () => {
    // Arrange
    const expectedLat = DEFAULT_LATITUDE;
    const expectedLng = DEFAULT_LONGITUDE;
    const expectedGeocodeArray = [
      {
        address_components: [
          {
            long_name: 'Russia',
            short_name: 'RU',
            types: [
              'country',
              'political',
            ],
          },
        ],
        formatted_address: 'Russia',
        geometry: {
          bounds: {
            south: 41.185353,
            west: 19.616099899999995,
            north: 82.1673907,
            east: -168.97788000000003,
          },
          location: {
            lat: 61.52401,
            lng: 105.31875600000001,
          },
          location_type: 'APPROXIMATE',
          viewport: {
            south: 41.185353,
            west: 19.616099899999995,
            north: 82.1673907,
            east: -168.97788000000003,
          },
        },
        place_id: 'ChIJ-yRniZpWPEURE_YRZvj9CRQ',
        types: [
          'country',
          'political',
        ],
      },
      {
        address_components: [
          {
            long_name: 'Tatarstan',
            short_name: 'Tatarstan',
            types: [
              'administrative_area_level_1',
              'political',
            ],
          },
          {
            long_name: 'Russia',
            short_name: 'RU',
            types: [
              'country',
              'political',
            ],
          },
        ],
        formatted_address: 'Tatarstan, Russia',
        geometry: {
          bounds: {
            south: 53.976026,
            west: 47.25864769999998,
            north: 56.6772159,
            east: 54.26028910000002,
          },
          location: {
            lat: 55.1802364,
            lng: 50.72639449999997,
          },
          location_type: 'APPROXIMATE',
          viewport: {
            south: 53.976026,
            west: 47.25864769999998,
            north: 56.6772159,
            east: 54.26028910000002,
          },
        },
        place_id: 'ChIJaf-Qi0dEXkERaIvmnXcqnhI',
        types: [
          'administrative_area_level_1',
          'political',
        ],
      },
      {
        address_components: [
          {
            long_name: "Gorod Kazan'",
            short_name: "Gorod Kazan'",
            types: [
              'administrative_area_level_2',
              'political',
            ],
          },
          {
            long_name: 'Tatarstan',
            short_name: 'Tatarstan',
            types: [
              'administrative_area_level_1',
              'political',
            ],
          },
          {
            long_name: 'Russia',
            short_name: 'RU',
            types: [
              'country',
              'political',
            ],
          },
        ],
        formatted_address: "Gorod Kazan', Tatarstan, Russia",
        geometry: {
          bounds: {
            south: 55.603317,
            west: 48.82050490000006,
            north: 55.938295,
            east: 49.382005700000036,
          },
          location: {
            lat: 55.83030309999999,
            lng: 49.06627090000006,
          },
          location_type: 'APPROXIMATE',
          viewport: {
            south: 55.603317,
            west: 48.82050490000006,
            north: 55.938295,
            east: 49.382005700000036,
          },
        },
        place_id: 'ChIJU5js9pZLWUERnLSgX9dn1Ks',
        types: [
          'administrative_area_level_2',
          'political',
        ],
      },
      {
        address_components: [
          {
            long_name: DEFAULT_CITY,
            short_name: 'Kazan',
            types: [
              'locality',
              'political',
            ],
          },
          {
            long_name: "Gorod Kazan'",
            short_name: "Gorod Kazan'",
            types: [
              'administrative_area_level_2',
              'political',
            ],
          },
          {
            long_name: 'Tatarstan',
            short_name: 'Tatarstan',
            types: [
              'administrative_area_level_1',
              'political',
            ],
          },
          {
            long_name: DEFAULT_COUNTRY,
            short_name: 'RU',
            types: [
              'country',
              'political',
            ],
          },
        ],
        formatted_address: 'Kazan, Tatarstan, Russia',
        geometry: {
          bounds: {
            south: 55.6707119,
            west: 48.832884000000035,
            north: 55.9202911,
            east: 49.313721999999984,
          },
          location: {
            lat: 55.8304307,
            lng: 49.06608060000008,
          },
          location_type: 'APPROXIMATE',
          viewport: {
            south: 55.6707119,
            west: 48.832884000000035,
            north: 55.9202911,
            east: 49.313721999999984,
          },
        },
        place_id: 'ChIJmc2sfCutXkERZYyttbl3y38',
        types: [
          'locality',
          'political',
        ],
      },
      {
        address_components: [
          {
            long_name: 'Vakhitovskiy Rayon',
            short_name: 'Vakhitovskiy Rayon',
            types: [
              'political',
              'sublocality',
              'sublocality_level_2',
            ],
          },
          {
            long_name: 'Kazan',
            short_name: 'Kazan',
            types: [
              'locality',
              'political',
            ],
          },
          {
            long_name: "Gorod Kazan'",
            short_name: "Gorod Kazan'",
            types: [
              'administrative_area_level_2',
              'political',
            ],
          },
          {
            long_name: 'Tatarstan',
            short_name: 'Tatarstan',
            types: [
              'administrative_area_level_1',
              'political',
            ],
          },
          {
            long_name: 'Russia',
            short_name: 'RU',
            types: [
              'country',
              'political',
            ],
          },
        ],
        formatted_address: 'Vakhitovskiy Rayon, Kazan, Tatarstan, Russia',
        geometry: {
          bounds: {
            south: 55.7569943,
            west: 49.04708010000002,
            north: 55.8065973,
            east: 49.174832299999935,
          },
          location: {
            lat: 55.7856168,
            lng: 49.12185959999999,
          },
          location_type: 'APPROXIMATE',
          viewport: {
            south: 55.7569943,
            west: 49.04708010000002,
            north: 55.8065973,
            east: 49.174832299999935,
          },
        },
        place_id: 'ChIJb872P2SsXkERQodGiP423QI',
        types: [
          'political',
          'sublocality',
          'sublocality_level_2',
        ],
      },
      {
        address_components: [
          {
            long_name: 'Vakhitovskiy',
            short_name: 'Vakhitovskiy',
            types: [
              'administrative_area_level_3',
              'political',
            ],
          },
          {
            long_name: "Gorod Kazan'",
            short_name: "Gorod Kazan'",
            types: [
              'administrative_area_level_2',
              'political',
            ],
          },
          {
            long_name: 'Tatarstan',
            short_name: 'Tatarstan',
            types: [
              'administrative_area_level_1',
              'political',
            ],
          },
          {
            long_name: 'Russia',
            short_name: 'RU',
            types: [
              'country',
              'political',
            ],
          },
        ],
        formatted_address: 'Vakhitovskiy, Tatarstan, Russia',
        geometry: {
          bounds: {
            south: 55.757037,
            west: 49.04584610000006,
            north: 55.80737300000001,
            east: 49.170274199999994,
          },
          location: {
            lat: 55.786271,
            lng: 49.10678059999998,
          },
          location_type: 'APPROXIMATE',
          viewport: {
            south: 55.757037,
            west: 49.04584610000006,
            north: 55.80737300000001,
            east: 49.170274199999994,
          },
        },
        place_id: 'ChIJ2RzWvRGtXkERh-4i_QWpwpU',
        types: [
          'administrative_area_level_3',
          'political',
        ],
      },
      {
        address_components: [
          {
            long_name: '420015',
            short_name: '420015',
            types: [
              'postal_code',
            ],
          },
          {
            long_name: 'Kazan',
            short_name: 'Kazan',
            types: [
              'locality',
              'political',
            ],
          },
          {
            long_name: "Gorod Kazan'",
            short_name: "Gorod Kazan'",
            types: [
              'administrative_area_level_2',
              'political',
            ],
          },
          {
            long_name: 'Tatarstan',
            short_name: 'Tatarstan',
            types: [
              'administrative_area_level_1',
              'political',
            ],
          },
          {
            long_name: 'Russia',
            short_name: 'RU',
            types: [
              'country',
              'political',
            ],
          },
        ],
        formatted_address: 'Kazan, Tatarstan, Russia, 420015',
        geometry: {
          bounds: {
            south: 55.79138,
            west: 49.12197590000005,
            north: 55.81314399999999,
            east: 49.161433999999986,
          },
          location: {
            lat: 55.8025436,
            lng: 49.138863300000025,
          },
          location_type: 'APPROXIMATE',
          viewport: {
            south: 55.79138,
            west: 49.12197590000005,
            north: 55.81314399999999,
            east: 49.161433999999986,
          },
        },
        place_id: 'ChIJLY2YzBKtXkERjPcMHc9TNiw',
        types: [
          'postal_code',
        ],
      },
      {
        address_components: [
          {
            long_name: '40',
            short_name: '40',
            types: [
              'street_number',
            ],
          },
          {
            long_name: 'Pushkin Street',
            short_name: 'Pushkin St',
            types: [
              'route',
            ],
          },
          {
            long_name: 'Kazan',
            short_name: 'Kazan',
            types: [
              'locality',
              'political',
            ],
          },
          {
            long_name: 'Vakhitovskiy',
            short_name: 'Vakhitovskiy',
            types: [
              'administrative_area_level_3',
              'political',
            ],
          },
          {
            long_name: "Gorod Kazan'",
            short_name: "Gorod Kazan'",
            types: [
              'administrative_area_level_2',
              'political',
            ],
          },
          {
            long_name: 'Respublika Tatarstan',
            short_name: 'Respublika Tatarstan',
            types: [
              'administrative_area_level_1',
              'political',
            ],
          },
          {
            long_name: 'Russia',
            short_name: 'RU',
            types: [
              'country',
              'political',
            ],
          },
          {
            long_name: '420015',
            short_name: '420015',
            types: [
              'postal_code',
            ],
          },
        ],
        formatted_address: 'Pushkin St, 40, Kazan, Respublika Tatarstan, Russia, 420015',
        geometry: {
          location: {
            lat: 55.79307660000001,
            lng: 49.12495739999997,
          },
          location_type: 'RANGE_INTERPOLATED',
          viewport: {
            south: 55.79172761970851,
            west: 49.12360841970849,
            north: 55.79442558029151,
            east: 49.12630638029145,
          },
        },
        place_id: 'ElrRg9C7LiDQn9GD0YjQutC40L3QsCwgNDAsINCa0LDQt9Cw0L3RjCwg0KDQtdGB0L8uINCi0LDRgtCw0YDRgdGC0LDQvSwg0KDQvtGB0YHQuNGPLCA0MjAwMTUiGhIYChQKEgmPfCjyE61eQRFaMYJsYQ3N4RAo',
        types: [
          'street_address',
        ],
      },
      {
        address_components: [
          {
            long_name: '40/42',
            short_name: '40/42',
            types: [
              'street_number',
            ],
          },
          {
            long_name: 'Pushkin Street',
            short_name: 'Pushkin St',
            types: [
              'route',
            ],
          },
          {
            long_name: 'Kazan',
            short_name: 'Kazan',
            types: [
              'locality',
              'political',
            ],
          },
          {
            long_name: 'Vakhitovskiy',
            short_name: 'Vakhitovskiy',
            types: [
              'administrative_area_level_3',
              'political',
            ],
          },
          {
            long_name: "Gorod Kazan'",
            short_name: "Gorod Kazan'",
            types: [
              'administrative_area_level_2',
              'political',
            ],
          },
          {
            long_name: 'Respublika Tatarstan',
            short_name: 'Respublika Tatarstan',
            types: [
              'administrative_area_level_1',
              'political',
            ],
          },
          {
            long_name: 'Russia',
            short_name: 'RU',
            types: [
              'country',
              'political',
            ],
          },
          {
            long_name: '420015',
            short_name: '420015',
            types: [
              'postal_code',
            ],
          },
        ],
        formatted_address: 'Pushkin St, 40/42, Kazan, Respublika Tatarstan, Russia, 420015',
        geometry: {
          location: {
            lat: 55.7933312,
            lng: 49.12521730000003,
          },
          location_type: 'ROOFTOP',
          viewport: {
            south: 55.79198221970849,
            west: 49.123868319708436,
            north: 55.79468018029149,
            east: 49.12656628029151,
          },
        },
        place_id: 'ChIJc51iixOtXkERp8YpteIMzZE',
        plus_code: {
          compound_code: 'Q4VG+83 Kazan, Tatarstan, Russia',
          global_code: '9H7FQ4VG+83',
        },
        types: [
          'street_address',
        ],
      },
    ];
    const expectedAddress = { city: DEFAULT_CITY, country: DEFAULT_COUNTRY };

    const mockGeocodeApi = jest.fn(() => new Promise((resolve) => { resolve(expectedGeocodeArray); }));
    jest.mock('../../services/geocodeApi', () => mockGeocodeApi);
    const geocodeAdapter = require('../geocodeAdapter').default;

    // Act
    const actualAddress = await geocodeAdapter(expectedLat, expectedLng);

    // Assert
    expect(actualAddress).toEqual(expectedAddress);
    expect(mockGeocodeApi).toBeCalledWith(expectedLat, expectedLng);
  });
});
