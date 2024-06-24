import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Userpage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>User Analysis</CardTitle>
          <CardDescription>User Activites of 2023</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            You can view you activites here Lorem ipsum dolor sit amet
            consectetur, adipisicing elit.
          </p>
        </CardContent>
        <CardFooter>
          <p>Designed with parallel routes</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Userpage;
