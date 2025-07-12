
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  MessageCircle, 
  StickyNote,
  Volume2,
  Play,
  Pause,
  Mic,
  StopCircle,
  CheckCircle2,
  Target,
  Lightbulb,
  BarChart3,
  RotateCcw
} from "lucide-react";

const LessonInterface = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [notes, setNotes] = useState("");
  const [chatMessage, setChatMessage] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [sectionProgress, setSectionProgress] = useState(65);

  const lessonSections = [
    {
      title: "Introduction to Quarterback Rating",
      content: "Understanding QB Rating Through Tom Brady's Career",
      type: "concept",
      completed: true
    },
    {
      title: "The Formula Behind the Magic",
      content: "Breaking Down the Passer Rating Calculation",
      type: "interactive",
      completed: true
    },
    {
      title: "Hands-On Analysis",
      content: "Calculate Aaron Rodgers vs. Patrick Mahomes",
      type: "practice",
      completed: false
    },
    {
      title: "Advanced Applications",
      content: "Predicting Performance Trends",
      type: "application",
      completed: false
    }
  ];

  const chatHistory = [
    {
      type: "ai",
      message: "Hey there, coach! 🏈 Ready to dive into quarterback analysis? Think of QB rating like a player's overall grade - just like how coaches evaluate players!",
      time: "2 min ago"
    },
    {
      type: "user", 
      message: "Why is completion percentage weighted differently than yards per attempt?",
      time: "1 min ago"
    },
    {
      type: "ai",
      message: "Great question! Think of it like this: A running back who gets 4 yards per carry consistently is more valuable than one who gets 1 yard, then 7 yards, averaging the same. Completion percentage shows consistency, while yards per attempt shows big-play ability. The formula balances both - just like how coaches value reliable players AND game-changers! 🎯",
      time: "30 sec ago"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Lesson Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                📊 Quarterback Statistics Deep Dive
              </h1>
              <p className="text-blue-100">
                Learn data analysis through NFL quarterback performance metrics
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-100">Lesson Progress</div>
              <div className="text-2xl font-bold">{sectionProgress}%</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Target className="h-3 w-3 mr-1" />
                25 minutes
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <BarChart3 className="h-3 w-3 mr-1" />
                Interactive
              </Badge>
            </div>
            <Progress value={sectionProgress} className="w-32 h-2 bg-white/20" />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section Navigation */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span>Lesson Sections</span>
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    {isPlaying ? "Pause" : "Play"} Audio
                  </Button>
                  <Button size="sm" variant="outline">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
                {lessonSections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`p-3 rounded-lg text-left text-sm transition-colors ${
                      currentSection === index
                        ? "bg-blue-600 text-white"
                        : section.completed
                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium">Section {index + 1}</span>
                      {section.completed && (
                        <CheckCircle2 className="h-4 w-4" />
                      )}
                    </div>
                    <div className="text-xs opacity-90">
                      {section.title}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Interactive Content */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="h-5 w-5 text-orange-500" />
                <span>{lessonSections[currentSection].title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="content" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="interactive">Interactive</TabsTrigger>
                  <TabsTrigger value="examples">Examples</TabsTrigger>
                </TabsList>
                
                <TabsContent value="content" className="mt-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        🏈 Understanding Quarterback Rating Like a Coach
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Imagine you're evaluating quarterbacks for your fantasy team. You wouldn't just look at total yards, right? 
                        You'd want to know: How accurate are they? Do they throw touchdowns? Do they avoid interceptions?
                      </p>
                      <p className="text-gray-700 mb-4">
                        That's exactly what QB Rating does - it's like having a scout's report that combines all the key stats into one number. 
                        A perfect 158.3 rating is like saying "this QB played flawlessly" - every pass was perfect!
                      </p>
                      <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-gray-900 mb-2">The Four Key Stats (Think of them as grades):</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• <strong>Completion %:</strong> How often they connect (accuracy grade)</li>
                          <li>• <strong>Yards per Attempt:</strong> How far they throw (power grade)</li>
                          <li>• <strong>TD %:</strong> How often they score (clutch grade)</li>
                          <li>• <strong>INT %:</strong> How often they mess up (mistake grade)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="interactive" className="mt-6">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        🎯 Calculate Tom Brady's 2007 Season Rating
                      </h3>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="text-sm text-gray-600">Season Stats</div>
                          <div className="mt-2 space-y-1 text-sm">
                            <div>Completions: 398</div>
                            <div>Attempts: 578</div>
                            <div>Yards: 4,806</div>
                            <div>TDs: 50</div>
                            <div>INTs: 8</div>
                          </div>
                        </div>
                        <div className="bg-blue-600 text-white p-4 rounded-lg">
                          <div className="text-sm text-blue-100">Your Calculated Rating</div>
                          <div className="text-3xl font-bold mt-2">117.2</div>
                          <div className="text-xs text-blue-200 mt-1">Outstanding Performance!</div>
                        </div>
                      </div>
                      <Button className="w-full">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Try Another Quarterback
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="examples" className="mt-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">🏆 Elite Performance</h4>
                        <div className="text-sm text-gray-600 mb-2">Aaron Rodgers 2011</div>
                        <div className="text-2xl font-bold text-green-600 mb-2">122.5</div>
                        <p className="text-xs text-gray-600">45 TDs, 6 INTs - incredible efficiency!</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-2">📈 Solid Starter</h4>
                        <div className="text-sm text-gray-600 mb-2">League Average</div>
                        <div className="text-2xl font-bold text-blue-600 mb-2">88.5</div>
                        <p className="text-xs text-gray-600">Good enough to lead most teams to wins</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
              disabled={currentSection === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous Section
            </Button>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                Section {currentSection + 1} of {lessonSections.length}
              </span>
            </div>

            <Button 
              onClick={() => setCurrentSection(Math.min(lessonSections.length - 1, currentSection + 1))}
              disabled={currentSection === lessonSections.length - 1}
            >
              Next Section
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Tutor Chat */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-purple-600" />
                <span>AI Coach Chat</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {chatHistory.map((chat, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg text-sm ${
                      chat.type === 'ai' 
                        ? "bg-blue-50 border-blue-200 border" 
                        : "bg-gray-50 border-gray-200 border ml-4"
                    }`}
                  >
                    <div className="font-medium text-xs text-gray-500 mb-1">
                      {chat.type === 'ai' ? '🤖 AI Coach' : '👤 You'} • {chat.time}
                    </div>
                    <div className="text-gray-700">{chat.message}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {/* Voice Chat Controls */}
                <div className="flex items-center space-x-2">
                  {isRecording ? (
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        // In a real app, stop recording and process audio
                        setIsRecording(false);
                        setAudioURL("https://www.example.com/recorded_audio.mp3"); // Replace with actual audio URL
                      }}
                    >
                      <StopCircle className="h-4 w-4 mr-2" />
                      Stop Live Chat
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        // In a real app, start recording
                        setIsRecording(true);
                      }}
                    >
                      <Mic className="h-4 w-4 mr-2" />
                      Start Voice Chat
                    </Button>
                  )}
                  {audioURL && <audio src={audioURL} controls />}
                </div>
                <Textarea 
                  placeholder="Ask me anything about QB stats - I'll explain using football examples!"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="min-h-[60px]"
                />
                <Button size="sm" className="w-full">
                  Ask Coach
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notes Section */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <StickyNote className="h-5 w-5 text-orange-500" />
                <span>Your Playbook Notes</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Jot down key insights, formulas, or 'aha!' moments..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[120px] mb-3"
              />
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Save Notes
                </Button>
                <Button size="sm" variant="outline">
                  Export
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Resources */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
            <CardHeader>
              <CardTitle className="text-sm">Quick Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  📊 QB Rating Calculator
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  🏈 NFL Stats Database
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  📈 Fantasy Football Guide
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-xs">
                  🎯 Practice Problems
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LessonInterface;
