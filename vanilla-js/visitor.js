class RockMusicVisitor{
    //write your code here
    visit(library){
       const filtered = []
       library.songs.forEach((song)=>{
          if(song.getGenre() == "Rock"){
             filtered.push(song.getName());
          }
       })
       return filtered;
    }
}

class Song{
   constructor(name,genre){
      this.name = name;
      this.genre = genre;
   } 
   getName(){
      return this.name;
   }
   getGenre(){
      return this.genre;
   }
}

class MusicLibrary{
   constructor(){
      this.songs = [];
   } 
   addSong(song){
      this.songs.push(song);
   }
   accept(visitor){
      return visitor.visit(this);
   }
}