import React from "react";
import {
  ReactOriginal,
  //   NextjsOriginal,
  JavascriptOriginal,
  MaterialuiOriginal,
  NodejsOriginal,
  MysqlOriginal,
  MongodbOriginal,
  PythonOriginal,
  GithubOriginal,
  GitOriginal,
  JavaOriginal,
  ReduxOriginal,
  BootstrapOriginal,
  CplusplusOriginal,
  Css3Original,
  TailwindcssOriginal,
  ExpressOriginal,
  PostmanOriginal,
  Html5Original,
  COriginal,
  FirebaseOriginal,
  VscodeOriginal,
} from "devicons-react";
import { FaCode } from "react-icons/fa6";

const SkillCardBlock = ({ icon, name }) => {
  let IconComponent = null;
  switch (icon) {
    case "ReactOriginal":
      IconComponent = ReactOriginal;
      break;

    case "COriginal":
      IconComponent = COriginal;
      break;
    case "FirebaseOriginal":
      IconComponent = FirebaseOriginal;
      break;

    case "PostmanOriginal":
      IconComponent = PostmanOriginal;
      break;
    case "ReduxOriginal":
      IconComponent = ReduxOriginal;
      break;
    case "Css3Original":
      IconComponent = Css3Original;
      break;
    case "TailwindcssOriginal":
      IconComponent = TailwindcssOriginal;
      break;
    case "BootstrapOriginal":
      IconComponent = BootstrapOriginal;
      break;
    case "JavascriptOriginal":
      IconComponent = JavascriptOriginal;
      break;
    case "MaterialuiOriginal":
      IconComponent = MaterialuiOriginal;
      break;
    case "NodejsOriginal":
      IconComponent = NodejsOriginal;
      break;
    case "ExpressOriginal":
      IconComponent = ExpressOriginal;
      break;

    case "MysqlOriginal":
      IconComponent = MysqlOriginal;
      break;

    case "MongodbOriginal":
      IconComponent = MongodbOriginal;
      break;

    case "PythonOriginal":
      IconComponent = PythonOriginal;
      break;

    case "CplusplusOriginal":
      IconComponent = CplusplusOriginal;
      break;

    case "VscodeOriginal":
      IconComponent = VscodeOriginal;
      break;
    case "GithubOriginal":
      IconComponent = GithubOriginal;
      break;

    case "GitOriginal":
      IconComponent = GitOriginal;
      break;

    case "Html5Original":
      IconComponent = Html5Original;
      break;
    case "JavaOriginal":
      IconComponent = JavaOriginal;
      break;
    default:
      break;
  }
  return (
    <div className="flex cursor-pointer flex-row items-center justify-evenly gap-3 rounded-md px-4 py-3 transition-all duration-150 ease-in-out hover:bg-gray-800 md:gap-4">
      {IconComponent ? (
        <div>
          <IconComponent className="scale-[150%]" />
        </div>
      ) : (
        <FaCode size={20} className="text-heading -mr-1" />
      )}
      <div className="text-sm sm:text-base">{name}</div>
    </div>
  );
};

export default SkillCardBlock;
