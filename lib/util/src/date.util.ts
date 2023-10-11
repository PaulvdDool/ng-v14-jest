export class DateUtil {
  static stringToDate( date: string ): Date {
    if ( !!date ) {
      if ( date.includes('T' ) ) {
        const dateString: string = date.split( 'T' )[ 0 ];
        const year: string = dateString.split( '-' )[ 0 ];
        const month: string = dateString.split( '-' )[ 1 ];
        const day: string = dateString.split( '-' )[ 2 ];
        const timeString: string = date.split( 'T' )[ 1 ];
        const hours: string = timeString.split( ':' )[ 0 ];
        const minutes: string = timeString.split( ':' )[ 1 ];
        const seconds: string = timeString.split( ':' )[ 2 ]?.replace( 'Z', '' );
        return new Date( Number( year ), Number( month ) - 1, Number( day ), Number( hours ), Number( minutes ), Number( seconds ) );
      } else {
        const year: string = date.split( '-' )[ 0 ];
        const month: string = date.split( '-' )[ 1 ];
        const day: string = date.split( '-' )[ 2 ];
        return new Date( Number( year ), Number( month ) - 1, Number( day ), 0, 0, 0 );
      }
    } else {
      return date as any;
    }
  }
}
