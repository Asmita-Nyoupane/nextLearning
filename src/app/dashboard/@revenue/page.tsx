import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RevenuePage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Revenue Analysis</CardTitle>
          <CardDescription>Revenue of 2023</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            You can view you revenue here. Lorem ipsum dolor sit amet
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

export default RevenuePage;
