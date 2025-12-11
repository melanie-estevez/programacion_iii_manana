
import AccessWithLimit from "./useState/AccessWithLimit";
import CheckboxSummary from "./useState/CheckBoxSummary";
import DocumentTitleChanger from "./useState/DocumentTitleChanfer";
import HoverFont from "./useState/HoverFont";
import LanguageSwitcher from "./useState/LanguageSwitcher";
import LoginWithLimit from "./useState/LoginWithLimit";
import MultiSwitch from "./useState/MultiSwitch";
import PostLikes from "./useState/PostLikes";

function App() {

  return (
    <>
      <HoverFont/>
      <AccessWithLimit/>
      <LoginWithLimit/>
      <DocumentTitleChanger/>
      <PostLikes/>
      <CheckboxSummary/>
      <LanguageSwitcher/>
      <MultiSwitch/>
    </>
  );
}

export default App;
