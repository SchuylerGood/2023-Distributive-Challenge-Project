import "../styles/styles.css"
import Left from "../images/Left.png"
import Right from "../images/Right.png"

function SearchPage(){
    <div className="full-screen">
      <div className="center-section">
        <h1 className="title">Bingus</h1>
        <form action="/results.php" >
          <input type="text" id="searchQuery" name="SearchBar" className="search-bar" placeholder="Search anything or type in a URL"/>
        </form>
      </div>
      <img alt="leftimage" className="left-design" src={Left}/>
      <img alt="rightimage" className="right-design" src={Right}/>
    </div>
}

export default SearchPage;