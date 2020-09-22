export class Artist {
    
          id  :   number  ;
          name  :   string    ;
          nameAr  :   string    ;
          image  :   string    ;
          isFeatured  : true  ;
          albums  : [
          {
              id  :   number  ;
              title  :   string    ;
              titleAr  :   string    ;
              image  :   string    ;
              artistId  :   number  ;
              artist  : {
                id  :   number  ;
                name  :   string    ;
                nameAr  :   string    ;
                image  :   string    ;
                isFeatured  : true  ;
                albums  : [
                {
                    id  :   number  ;
                    title  :   string    ;
                    titleAr  :   string    ;
                    image  :   string    ;
                    artistId  :   number  ;
                    languageId  :   number  ;
                    language  : {
                      id  :   number  ;
                      title  :   string    ;
                      titleAr  :   string  
                  }  ;
                    albumCategoryId  :   number  ;
                    albumCategory  : {
                      id  :   number  ;
                      title  :   string    ;
                      titleAr  :   string  
                  }  ;
                    realeaseDate  :  string ;
                    isFeatured  : true
                }
              ]
            }  ;
              languageId  :   number  ;
              language  : {
                id  :   number  ;
                title  :   string    ;
                titleAr  :   string  
            }  ;
              albumCategoryId  :   number  ;
              albumCategory  : {
                id  :   number  ;
                title  :   string    ;
                titleAr  :   string  
            }  ;
              realeaseDate  :  string   ;
              isFeatured  : true
          }
        ]
      }
