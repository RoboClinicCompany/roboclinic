import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function RoboClinic() {
  return (
    <main className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">RoboClinic AI Intake</h1>

      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">🧠 AI History Taker</h2>
          <Textarea placeholder="Hi, how can I help you today? (e.g. I've had a sore throat...)" className="min-h-[120px]" />
          <Button>Generate Summary</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">🩺 Vitals Entry</h2>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Blood Pressure (e.g. 120/80)" />
            <Input placeholder="Heart Rate (bpm)" />
            <Input placeholder="Temperature (°C)" />
            <Input placeholder="Respiratory Rate" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">🧾 Nurse Summary</h2>
          <Textarea placeholder="Summary of patient findings for GP review..." className="min-h-[100px]" />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-xl font-semibold">👨‍⚕️ GP Review & Actions</h2>
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Reviewed case and approve discharge</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Prescribe antibiotics</span>
            </label>
          </div>
          <Button className="mt-4">Finalize Encounter</Button>
        </CardContent>
      </Card>
    </main>
  );
}