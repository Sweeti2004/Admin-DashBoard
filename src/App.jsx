// import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
// import Header from './Components/Header';
// import Sidebar from './Components/Sidebar';
// import Home from './Pages/Home';
// import Themes from './Pages/Themes';
// import Tables from './Pages/Tables';
// import Charts from './Pages/Charts';
// import Calendar from './Pages/Calendar';
// import Kanban from './Pages/Kanban';

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [fontSize, setFontSize] = useState('16px');
//   const [layout, setLayout] = useState('full');
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [showCardShadow, setShowCardShadow] = useState(true);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//     setShowSidebar(!showSidebar);
//   };

//   const themeClass = darkMode ? 'dark' : 'light';
//   const layoutClass = layout === 'boxed' ? 'boxed-layout' : '';
//   const fontStyle = { fontSize };

//   return (
//     <Router>
//       <div className={`app-wrapper ${themeClass} ${layoutClass}`} style={fontStyle}>
        
//         {/* ✅ Header with conditional class based on sidebar */}
//         <Header
//           OpenSidebar={OpenSidebar}
//           className={`header ${showSidebar ? '' : 'expanded'}`}
//         />

//         <div className="grid-container">
//           {/* ✅ Sidebar only shown when showSidebar is true */}
//           {showSidebar && (
//             <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//           )}

//           {/* ✅ Main expands when sidebar is hidden */}
//           <main className={`main-content ${showSidebar ? '' : 'expanded'}`}>
//             <Routes>
//               <Route path='/' element={<Home />} />
//               <Route
//                 path='/themes'
//                 element={
//                   <Themes
//                     darkMode={darkMode}
//                     setDarkMode={setDarkMode}
//                     fontSize={fontSize}
//                     setFontSize={setFontSize}
//                     layout={layout}
//                     setLayout={setLayout}
//                     showSidebar={showSidebar}
//                     setShowSidebar={setShowSidebar}
//                     showCardShadow={showCardShadow}
//                     setShowCardShadow={setShowCardShadow}
//                   />
//                 }
//               />
//               <Route path='/tables' element={<Tables showCardShadow={showCardShadow} />} />
//               <Route path='/charts' element={<Charts />} />
//               <Route path='/calendar' element={<Calendar />} />
//               <Route path='/kanban' element={<Kanban />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Themes from './Pages/Themes';
import Tables from './Pages/Tables';
import Charts from './Pages/Charts';
import Calendar from './Pages/Calendar';
import Kanban from './Pages/Kanban';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState('16px');
  const [layout, setLayout] = useState('full');
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCardShadow, setShowCardShadow] = useState(true);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
    setShowSidebar(!showSidebar);
  };

  const themeClass = darkMode ? 'dark' : 'light';
  const layoutClass = layout === 'boxed' ? 'boxed-layout' : '';
  const fontStyle = { fontSize };

  return (
    <Router>
      <div className={`app-wrapper ${themeClass} ${layoutClass}`} style={fontStyle}>
        
        {/* ✅ Header with conditional class based on sidebar */}
        <Header
          OpenSidebar={OpenSidebar}
          className={`header ${showSidebar ? '' : 'expanded'}`}
        />

        {/* ✅ Grid container with dynamic class */}
        <div className={`grid-container ${showSidebar ? '' : 'expanded'}`}>
          
          {/* ✅ Sidebar toggle */}
          {showSidebar && (
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          )}

          {/* ✅ Main content */}
          <main className={`main-content ${showSidebar ? '' : 'expanded'}`}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route
                path='/themes'
                element={
                  <Themes
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    layout={layout}
                    setLayout={setLayout}
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                    showCardShadow={showCardShadow}
                    setShowCardShadow={setShowCardShadow}
                  />
                }
              />
              <Route path='/tables' element={<Tables showCardShadow={showCardShadow} />} />
              <Route path='/charts' element={<Charts />} />
              <Route path='/calendar' element={<Calendar />} />
              <Route path='/kanban' element={<Kanban />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

