import { Tab, Tabs } from "@mui/material";
import { useConfigStore } from "../../store/useConfigStore";

const Navigation = () => {
  const { selectedNav, setSelectedNav, navConfig } = useConfigStore();

  return (
    <>
      <Tabs
        value={selectedNav}
        onChange={(_event, changedValue) => {
          setSelectedNav(changedValue);
        }}
      >
        {navConfig.map((nav) => (
          <Tab
            data-testid={nav.id}
            key={nav.id}
            value={nav.id}
            label={nav.name}
          ></Tab>
        ))}
      </Tabs>
    </>
  );
};

export default Navigation;
