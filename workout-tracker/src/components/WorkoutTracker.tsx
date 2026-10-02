import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

function WorkoutTracker() {
  const [sets, setSets] = useState(0);
  const exerciseInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = `Workout: ${sets} Sets`;
  }, [sets]);

  function completeSet() {
    setSets(sets + 1);
  }

  function removeSet() {
    setSets(Math.max(0, sets - 1));
  }

  function resetWorkout() {
    setSets(0);
  }

  function focusExerciseInput() {
    exerciseInputRef.current?.focus();
  }

  function getMessage() {
    if (sets === 0) {
      return "Start your workout!";
    } else if (sets < 5) {
      return "Keep going! 💪";
    } else {
      return "Great workout! 🔥";
    }
  }

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle className="text-center text-3xl">Workout Tracker</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="mb-4">
          <p className="mb-2 font-medium">Exercise Name</p>
          <Input ref={exerciseInputRef} placeholder="Enter exercise name" />
        </div>

        <h2 className="mb-2 text-center text-6xl font-bold">{sets}</h2>

        {sets >= 5 && (
          <div className="mb-2 flex justify-center">
            <Badge>Goal Completed</Badge>
          </div>
        )}

        <p className="mb-6 text-center text-sm text-slate-500">{getMessage()}</p>

        <div className="mb-4 flex justify-center gap-3">
          <Button onClick={completeSet}>+ Complete Set</Button>
          <Button onClick={removeSet} disabled={sets === 0}>
            - Remove Set
          </Button>
          <Button onClick={resetWorkout} variant="secondary">
            Reset Workout
          </Button>
        </div>

        <Button variant="outline" className="w-full" onClick={focusExerciseInput}>
          Focus Exercise Input
        </Button>
      </CardContent>
    </Card>
  );
}

export default WorkoutTracker;