
export const BaseURL = "http://188.225.184.108:9091";
export const API_URL = BaseURL+"/api";
export class END_POINTS {
    // Yaboos API
    public static login = API_URL+"/Account/login"; // login 
    public static singup = API_URL+"/Account/register"; // singup 

    public static liveStream = API_URL+"/Radio/GetStreamLinks"; // live stream
    public static albumSearch = API_URL+"/albums/Search"; // album search
    public static songSearch = API_URL+"/songs/Search"; // songs search
    public static artistSearch = API_URL+"/artists/Search"; // artists search
    public static favourites = API_URL+"/favourites"; // favourites 
    public static songplay = API_URL+"/songs/playsong"; // song play 

    public static songofAlbum = API_URL+"/songs/GetSongsOfAlbum"; // song play 
    public static AlbumofArtist = API_URL+"/songs/GetAlbumsOfArtist"; // song play 


}


