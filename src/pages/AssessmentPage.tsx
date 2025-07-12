
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  Clock, 
  Target, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  Trophy,
  BarChart3,
  Lightbulb
} from "lucide-react";
import AudioRecorder from '@/components/ui/AudioRecorder';

const AssessmentPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  type AudioAnswer = { url: string; blob: Blob };
  type Answer = string | AudioAnswer;
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, Answer>>({});
  const [showResults, setShowResults] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1200); // 20 minutes

  const questions = [
    {
      id: 0,
      question: "Tom Brady threw 28 completions in 40 attempts for 342 yards, 3 TDs, and 1 INT. What's his completion percentage?",
      context: "🏈 You're analyzing Brady's performance in the 2021 NFC Championship game",
      options: [
        { value: "a", text: "65%", explanation: "Close, but check your math!" },
        { value: "b", text: "70%", explanation: "Correct! 28/40 = 0.70 = 70%" },
        { value: "c", text: "75%", explanation: "Too high - remember it's completions ÷ attempts" },
        { value: "d", text: "80%", explanation: "Way too high for this performance" }
      ],
      correct: "b",
      difficulty: "Easy",
      skill: "Basic Calculations"
    },
    {
      id: 1,
      question: "Which quarterback had the better performance: Player A (65% completion, 8.2 YPA, 2 TDs, 0 INTs) or Player B (78% completion, 6.1 YPA, 1 TD, 1 INT)?",
      context: "⚡ Fantasy football playoff decision - who should you start?",
      options: [
        { value: "a", text: "Player A - Better big play ability", explanation: "Correct! Higher YPA and TD rate usually indicates better performance" },
        { value: "b", text: "Player B - Higher completion rate", explanation: "Completion % alone doesn't tell the whole story" },
        { value: "c", text: "They're equal", explanation: "Consider the impact of different stats" },
        { value: "d", text: "Need more information", explanation: "We have enough key stats to make a comparison" }
      ],
      correct: "a",
      difficulty: "Medium",
      skill: "Performance Analysis"
    },
    {
      id: 2,
      question: "If a QB has a perfect passer rating (158.3), what can you conclude?",
      context: "🏆 Understanding elite quarterback performance metrics",
      options: [
        { value: "a", text: "They threw for over 300 yards", explanation: "Perfect rating isn't about total yards" },
        { value: "b", text: "They had 77.5%+ completion, 12.5+ YPA, TD on 11.875%+ of attempts, and no INTs", explanation: "Exactly right! These are the thresholds for a perfect rating" },
        { value: "c", text: "They threw at least 4 touchdown passes", explanation: "Perfect rating is about percentages, not totals" },
        { value: "d", text: "They won the game", explanation: "Perfect rating doesn't guarantee a win!" }
      ],
      correct: "b",
      difficulty: "Hard",
      skill: "Advanced Metrics"
    },
    {
      id: 3,
      type: 'audio',
      question: "In your own words, explain what makes a quarterback's performance elite. Give at least two key factors.",
      context: "🎤 Audio Response: Imagine you're a sports analyst on a podcast.",
      prompt: "Record your answer (30 seconds max)",
      difficulty: "Medium",
      skill: "Communication"
    },
    {
      id: 4,
      type: 'audio',
      question: "Describe a memorable football game and what statistical moments made it stand out to you.",
      context: "🎤 Audio Response: Share your story as if teaching a friend.",
      prompt: "Record your answer (30 seconds max)",
      difficulty: "Easy",
      skill: "Storytelling"
    },
  ];

  const handleAnswerSelect = (questionId: number, answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleAudioComplete = (questionId: number, url: string, blob: Blob) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: { url, blob }
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      const userAnswer = selectedAnswers[q.id];
      if (q.type === 'audio') {
        if (userAnswer && typeof userAnswer === 'object' && 'url' in userAnswer) {
          correct++;
        }
      } else if (userAnswer === q.correct) {
        correct++;
      }
    });
    return (correct / questions.length) * 100;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = questions.filter(q => {
      const userAnswer = selectedAnswers[q.id];
      if (q.type === 'audio') {
        return userAnswer && typeof userAnswer === 'object' && 'url' in userAnswer;
      }
      return userAnswer === q.correct;
    }).length;

    return (
      <div className="space-y-6">
        {/* Results Header */}
        <Card className={`border-0 ${score >= 80 ? 'bg-gradient-to-r from-green-600 to-blue-600' : score >= 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-red-500 to-pink-500'} text-white`}>
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-6xl mb-4">
                {score >= 80 ? '🏆' : score >= 60 ? '📈' : '💪'}
              </div>
              <h1 className="text-3xl font-bold mb-2">
                {score >= 80 ? 'Championship Performance!' : score >= 60 ? 'Solid Game!' : 'Keep Training, Coach!'}
              </h1>
              <div className="text-2xl font-bold mb-2">{correctAnswers}/{questions.length} Correct ({Math.round(score)}%)</div>
              <p className="text-lg opacity-90">
                {score >= 80 ? 'You\'re ready for the playoffs! Outstanding QB analysis skills.' : 
                 score >= 60 ? 'Good game! With a bit more practice, you\'ll be championship ready.' : 
                 'Every great coach started somewhere. Let\'s review and get back in there!'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <span>Performance Breakdown</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isAudio = typeof userAnswer === 'object' && userAnswer !== null && 'url' in userAnswer;
                  const isCorrect = !isAudio && userAnswer === question.correct;
                  const selectedOption = !isAudio && question.options ? question.options.find(opt => opt.value === userAnswer) : undefined;
                  
                  return (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            Question {index + 1}
                          </div>
                          <div className="text-xs text-gray-600 mb-1">
                            {question.context}
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {question.type === 'audio' ? (
                            <Badge variant={userAnswer ? "default" : "destructive"}>
                              {userAnswer ? "Answered" : "Not Answered"}
                            </Badge>
                          ) : isCorrect ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          )}
                          {question.type !== 'audio' && (
                            <Badge variant={isCorrect ? "default" : "destructive"}>
                              {isCorrect ? "Correct" : "Incorrect"}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700 mb-2">
                        {question.question}
                      </div>
                      <div className="text-xs">
                        {question.type === 'audio' ? (
                          userAnswer && isAudio ? (
                            <div className="p-2 rounded bg-blue-50 text-blue-800">
                              <strong>Your audio answer:</strong>
                              <audio controls src={userAnswer.url} className="w-full mt-2" />
                            </div>
                          ) : (
                            <div className="p-2 rounded bg-red-50 text-red-800">No audio answer submitted.</div>
                          )
                        ) : (
                          <>
                            <div className={`p-2 rounded ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                              <strong>Your answer:</strong> {selectedOption?.text}
                              <br />
                              <strong>Explanation:</strong> {selectedOption?.explanation}
                            </div>
                            {!isCorrect && (
                              <div className="mt-1 p-2 bg-blue-50 text-blue-800 rounded">
                                <strong>Correct answer:</strong> {question.options.find(opt => opt.value === question.correct)?.text}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                <span>Your Stats & Next Steps</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{Math.round(score)}%</div>
                    <div className="text-sm text-blue-800">Overall Score</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{correctAnswers}</div>
                    <div className="text-sm text-green-800">Questions Right</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Skill Areas:</h4>
                  {['Basic Calculations', 'Performance Analysis', 'Advanced Metrics'].map((skill, index) => {
                    const skillQuestions = questions.filter(q => q.skill === skill);
                    const skillCorrect = skillQuestions.filter(q => {
                      const userAnswer = selectedAnswers[q.id];
                      if (q.type === 'audio') {
                        return userAnswer && typeof userAnswer === 'object' && 'url' in userAnswer;
                      }
                      return userAnswer === q.correct;
                    }).length;
                    const skillScore = (skillCorrect / skillQuestions.length) * 100;
                    
                    return (
                      <div key={skill} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{skill}</span>
                          <span>{Math.round(skillScore)}%</span>
                        </div>
                        <Progress value={skillScore} className="h-2" />
                      </div>
                    );
                  })}
                </div>

                <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2 text-orange-500" />
                      Recommended Next Steps
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {score < 60 && <li>• Review basic QB stat calculations</li>}
                      {score < 80 && <li>• Practice comparing player performances</li>}
                      <li>• Try the advanced QB rating calculator</li>
                      <li>• Join the Fantasy Football study group</li>
                      <li>• Take the next assessment: "Running Back Analytics"</li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="flex space-x-2">
                  <Button className="flex-1">
                    Review Lessons
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Next Assessment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Assessment Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                🏈 Quarterback Analytics Assessment
              </h1>
              <p className="text-blue-100">
                Test your understanding using real NFL scenarios
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-sm text-blue-100">Time Remaining</div>
                  <div className="text-2xl font-bold flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    {formatTime(timeRemaining)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-blue-100">Progress</div>
                  <div className="text-2xl font-bold">
                    {currentQuestion + 1}/{questions.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Progress 
            value={((currentQuestion + 1) / questions.length) * 100} 
            className="mt-4 h-2 bg-white/20" 
          />
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span>Question {currentQuestion + 1}</span>
            </CardTitle>
            <div className="flex items-center space-x-2">
              <Badge variant="outline">
                {questions[currentQuestion].difficulty}
              </Badge>
              <Badge variant="secondary">
                {questions[currentQuestion].skill}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Context */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
              <div className="text-sm font-medium text-gray-900 mb-1">Scenario Context</div>
              <div className="text-gray-700">{questions[currentQuestion].context}</div>
            </div>

            {/* Question */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {questions[currentQuestion].question}
              </h3>

              {/* Render audio or multiple choice */}
              {questions[currentQuestion].type === 'audio' ? (
                <div className="space-y-4">
                  <div className="text-sm text-slate-700 mb-2">{questions[currentQuestion].prompt}</div>
                  <AudioRecorder
                    onRecordingComplete={(url, blob) => handleAudioComplete(questions[currentQuestion].id, url, blob)}
                  />
                </div>
              ) : (
                <RadioGroup
                  value={typeof selectedAnswers[currentQuestion] === "string" ? selectedAnswers[currentQuestion] : ""}
                  onValueChange={(value) => handleAnswerSelect(currentQuestion, value)}
                  className="space-y-3"
                >
                  {questions[currentQuestion].options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button 
          variant="outline"
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
        >
          Previous Question
        </Button>

        <div className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </div>

        {currentQuestion === questions.length - 1 ? (
          <Button 
            onClick={handleSubmit}
            disabled={
              questions[currentQuestion].type === 'audio'
                ? !(selectedAnswers[currentQuestion] && typeof selectedAnswers[currentQuestion] === 'object' && 'url' in selectedAnswers[currentQuestion])
                : !selectedAnswers[currentQuestion]
            }
            className="bg-green-600 hover:bg-green-700"
          >
            <Trophy className="h-4 w-4 mr-2" />
            Submit Assessment
          </Button>
        ) : (
          <Button 
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            disabled={
              questions[currentQuestion].type === 'audio'
                ? !(selectedAnswers[currentQuestion] && typeof selectedAnswers[currentQuestion] === 'object' && 'url' in selectedAnswers[currentQuestion])
                : !selectedAnswers[currentQuestion]
            }
          >
            Next Question
          </Button>
        )}
      </div>

      {/* Answer Summary */}
      <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
        <CardHeader>
          <CardTitle className="text-sm">Answer Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
            {questions.map((q, index) => {
              const userAnswer = selectedAnswers[index];
              const isAudio = typeof userAnswer === 'object' && userAnswer !== null && 'url' in userAnswer;
              const isAnswered = (typeof userAnswer === 'string' && userAnswer) || (isAudio && userAnswer.url);
              return (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-8 h-8 rounded text-xs font-medium transition-colors ${
                    index === currentQuestion
                      ? "bg-blue-600 text-white"
                      : isAnswered
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-gray-100 text-gray-600 border border-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssessmentPage;
