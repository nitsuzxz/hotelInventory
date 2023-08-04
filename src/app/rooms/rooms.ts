// interface that contains rooms information
export interface Room{

    totalRooms: number,
    availableRooms: number;
    bookedRooms: number;

}

export interface RoomList {

    roomID:number;
    roomType:string;
    amenities: string;
    price: number;
    photoUrl:string;
    checkinTime:Date;
    checkoutTime:Date;
    rating:number;
}