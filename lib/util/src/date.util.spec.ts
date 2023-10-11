import { DateUtil } from "./date.util";

describe( 'DateUtil', () => {
  it( 'should convert a datestring to a JavaScript Date object', () => {
    expect( DateUtil.stringToDate( '2023-10-11T11:30:10.555Z' ) ).toEqual( new Date( 2023, 9, 11, 11, 30, 10 ) );
    expect( DateUtil.stringToDate( '2023-10-11' ) ).toEqual( new Date( 2023, 9, 11, 0, 0, 0 ) );
  } );
} );
