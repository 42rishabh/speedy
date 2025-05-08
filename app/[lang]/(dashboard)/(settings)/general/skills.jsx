import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Fetch plugins from API
const fetchMostUsedPlugins = async () => {
  const res = await fetch("/api/settings/general/plugins");
  const data = await res.json();
  if (data.status === "success") {
    return data.data;
  }
  return [];
};

const Plugins = () => {
  const [plugins, setPlugins] = useState([]);

  useEffect(() => {
    // Fetch most-used plugins on component mount
    fetchMostUsedPlugins().then(setPlugins);
  }, []);

  return (
    <Card>
      <CardHeader className="border-none mb-3">
        <CardTitle className="flex-1 text-lg font-medium text-default-800">
          Most Used Plugins in Websites
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 items-center">
          {plugins.length > 0 ? (
            plugins.map((plugin, index) => (
              <Badge
                key={`plugin-${index}`}
                className="text-xs font-medium text-default-500 bg-default-100 dark:bg-default-50 flex items-center gap-2.5"
              >
                {plugin.plugin_name}
              </Badge>
            ))
          ) : (
            <p>No plugins found.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Plugins;
