import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabsData = [
  {
    value: "workouts",
    label: "Workouts",
    content: <p>workous</p>,
  },
  {
    value: "exercises",
    label: "Exercises",
    content: <p>exercises</p>,
  },
  {
    value: "metrics",
    label: "Metrics",
    content: <p>metrics</p>,
  },
  {
    value: "settings",
    label: "Settings",
    content: <p>Settings</p>,
  },
];

export const StyledTabs = () => {
  return (
    <div className="w-full">
      <Tabs defaultValue="workouts">
        <TabsList className="flex justify-start gap-4 bg-transparent">
          {tabsData.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="px-4 py-2 rounded-md text-gray-700"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsData.map((tab) => (
          <TabsContent
            key={tab.value}
            value={tab.value}
            className="mt-8 bg-white p-5 rounded-md shadow-lg"
          >
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
