import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CompanyProfile from "./components/companyProfile/companyProfile";
import UserProfile from "./components/UserProfile/userProfile";
import EditCompany from "./components/editCompany/editCompany";
import EditUser from "./components/editUser/editUser";
import "semantic-ui-css/semantic.min.css";
import SignUpGeneral from "./components/general/Sign-up-general";
import SignUpCompany from "./components/company/Sign-up-company";
import SignUpUser from "./components/user/Sign-up-user";
import Login from "./components/general/Login";
// import MainPageHeader from "./components/general/Home-page-header";
import MainPageFooter from "./components/general/Home-page-footer";
import MainPagePosts from "./components/general/Home-page-posts";
import Search from "./components/general/Search";
import UserPageHeader from "./components/user/User-page-header";
import UserHome from "./components/userHome/userHome";
import CompanyHome from "./components/companyHome/companyHome";
import PostCompany from "./components/postCompany/postCompany";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Switch>
//           <Route path="/userprofile" exact component={UserProfile} />
//           <Route path="/companyprofile" component={CompanyProfile} />
//           <Route path="/useredit" component={EditUser} />
//           <Route path="/companyedit" component={EditCompany} />
//         </Switch>
//       </div>
//     </Router>

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <UserPageHeader />

        <Switch>
          <Route path="/" exact>
            <Search />
            <MainPagePosts />
          </Route>
          <Route path="/signup" exact component={SignUpGeneral} />
          <Route path="/signupcompany" component={SignUpCompany} />
          <Route path="/signupuser" component={SignUpUser} />{" "}
          <Route path="/login" component={Login} />
          <Route path="/userprofile" exact component={UserProfile} />
          <Route path="/companyprofile" component={CompanyProfile} />
          <Route path="/useredit" component={EditUser} />
          <Route path="/companyedit" component={EditCompany} />
          <Route path="/userhome" component={UserHome} />
          <Route path="/companyhome" component={CompanyHome} />
          <Route path="/postcompany" component={PostCompany} />
        </Switch>
        <MainPageFooter />
      </div>
    </Router>
  );
};

export default App;

// import { stat } from "fs";

// // Store

// //Action
// const increment = () => {
//   return {
//     type: "INCREMENT"
//   };
// };
// //Reduce
// const counter = (state = 0, action: any) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;

//     default:
//       return state;
//   }
// };

// let store = createStore(counter);

// //Dispaly it in the console
// store.subscribe(() => console.log(store.getState()));

// //Dispatch
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
