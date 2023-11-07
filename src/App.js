import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RecommCandidate from './RecommCandidate/RecommCandidate';
import PostJobForm from './pages/PostJobForm';
import JobDetails from './RecommCandidate/RecommCandidateDetails';
import CreateQuestionPage from './pages/CreateQuestionPage';
import CreateQuestionForm from './pages/CreateQuestionForm';
import CandQuestPage from './Candidate question/CandQuestPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainPage" element={<MainPage />} />
        <Route path='/recommCandidate' element={<RecommCandidate />} />
        <Route path="/postJobForm" element={<PostJobForm />} />
        <Route path="/recommCandidate/:jobTitle/:matchCandidate" element={<JobDetails />} />
        <Route path='/createQuestion' element={<CreateQuestionPage />}/>
        <Route path='/createQuestion/:jobTitle' element={<CreateQuestionForm />} />
        <Route path='/candQues' element={<CandQuestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
