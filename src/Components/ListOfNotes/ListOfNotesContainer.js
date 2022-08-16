import {connect} from "react-redux";
import ListOfNotes from "./ListOfNotes";

let mapStateToProps = (state) =>{
    return{
        listNotes: state.HomePage.notes
    }
}

export default connect(mapStateToProps, null)(ListOfNotes);