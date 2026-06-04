import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

export default function LocalizedLink({ to, ...props }) {
  const { localizePath } = useI18n();
  return <Link to={localizePath(to)} {...props} />;
}
