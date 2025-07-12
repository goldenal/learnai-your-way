
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Download, 
  ExternalLink, 
  Search, 
  BookOpen, 
  Users, 
  HelpCircle,
  Star,
  MessageSquare,
  FileText,
  Video,
  Link,
  Calendar,
  Filter
} from "lucide-react";

const CourseResources = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const downloadableResources = [
    {
      title: "QB Rating Calculator Spreadsheet",
      description: "Interactive Excel template with all NFL quarterback stats",
      type: "Excel",
      size: "2.4 MB",
      downloads: 1247,
      rating: 4.8,
      tags: ["calculator", "spreadsheet", "stats"]
    },
    {
      title: "Football Analytics Cheat Sheet",
      description: "Quick reference guide for all key football statistics",
      type: "PDF",
      size: "1.2 MB", 
      downloads: 2156,
      rating: 4.9,
      tags: ["reference", "formulas", "quick-guide"]
    },
    {
      title: "Fantasy Draft Strategy Guide",
      description: "Data-driven approach to fantasy football drafting",
      type: "PDF",
      size: "3.1 MB",
      downloads: 891,
      rating: 4.6,
      tags: ["fantasy", "strategy", "drafting"]
    },
    {
      title: "NFL Team Defense Analysis Template",
      description: "Compare defensive stats across teams and seasons",
      type: "Excel",
      size: "1.8 MB",
      downloads: 654,
      rating: 4.7,
      tags: ["defense", "template", "comparison"]
    }
  ];

  const externalLinks = [
    {
      title: "Pro Football Reference",
      url: "https://pro-football-reference.com",
      description: "Comprehensive NFL statistics database",
      category: "Statistics",
      rating: 4.9,
      tags: ["database", "historical", "stats"]
    },
    {
      title: "Football Study Hall",
      url: "https://footballstudyhall.com",
      description: "Advanced college football analytics",
      category: "Analytics",
      rating: 4.6,
      tags: ["college", "analytics", "advanced"]
    },
    {
      title: "Fantasy Football Calculator",
      url: "https://fantasyfootballcalculator.com",
      description: "Mock drafts and player rankings",
      category: "Fantasy",
      rating: 4.5,
      tags: ["fantasy", "rankings", "mock-draft"]
    },
    {
      title: "Sharp Football Analysis",
      url: "https://sharpfootballanalysis.com",
      description: "Betting-focused football analytics",
      category: "Analytics",
      rating: 4.4,
      tags: ["betting", "sharp", "analytics"]
    }
  ];

  const discussionTopics = [
    {
      title: "Best QB Rating Season Ever?",
      author: "FootballFan23",
      replies: 47,
      lastActivity: "2 hours ago",
      category: "General Discussion",
      tags: ["qb-rating", "history", "debate"]
    },
    {
      title: "Fantasy Draft: Analytics vs Gut Feeling?",
      author: "DataDriven",
      replies: 23,
      lastActivity: "5 hours ago", 
      category: "Fantasy Football",
      tags: ["fantasy", "strategy", "analytics"]
    },
    {
      title: "Help: Understanding Adjusted Net Yards per Attempt",
      author: "NewbieLearner",
      replies: 12,
      lastActivity: "1 day ago",
      category: "Help & Questions",
      tags: ["help", "any/a", "advanced-stats"]
    },
    {
      title: "College vs NFL: Which Stats Transfer?",
      author: "CollegeCoach",
      replies: 31,
      lastActivity: "2 days ago",
      category: "Analytics Discussion",
      tags: ["college", "nfl", "predictive"]
    }
  ];

  const faqs = [
    {
      question: "Why is QB Rating calculated so differently from other sports ratings?",
      answer: "QB Rating was designed in the 1970s to capture the four most important aspects of quarterback play: completion percentage, yards per attempt, touchdown rate, and interception rate. Unlike newer metrics, it uses a complex formula that makes 158.3 the maximum possible score. Think of it like golf - it's not intuitive, but it works! Modern metrics like QBR try to be more intuitive.",
      category: "QB Rating Basics",
      votes: 45
    },
    {
      question: "What's the difference between QB Rating and ESPN's QBR?",
      answer: "Great question! Traditional QB Rating (passer rating) only looks at passing stats and has that weird 158.3 scale. ESPN's QBR includes rushing, considers game situation (like a 4th quarter TD being worth more), and uses a 0-100 scale. Think of QB Rating like basic batting average, and QBR like advanced sabermetrics in baseball.",
      category: "Advanced Analytics",
      votes: 38
    },
    {
      question: "How do I use these stats for fantasy football?",
      answer: "Focus on consistency over big games! Look for QBs with: 1) High completion % (sustains drives), 2) Good TD:INT ratio (avoids negative points), 3) Decent rushing yards (bonus points), 4) Favorable matchups (check opponent pass defense rankings). Don't just chase the highest single-game scores!",
      category: "Fantasy Application",
      votes: 52
    },
    {
      question: "Why do some 'great' games have lower QB ratings than expected?",
      answer: "QB Rating heavily weights efficiency over volume. A QB throwing 35/50 for 400 yards, 2 TDs, 2 INTs might have a lower rating than one going 20/25 for 250 yards, 2 TDs, 0 INTs. It's like comparing a running back who gets 100 yards on 30 carries vs. one who gets 80 yards on 15 carries - efficiency matters!",
      category: "Understanding Metrics",
      votes: 29
    }
  ];

  const glossaryTerms = [
    {
      term: "Quarterback Rating (Passer Rating)",
      definition: "A measure of QB performance combining completion %, yards per attempt, TD %, and INT %. Scale from 0-158.3.",
      example: "Tom Brady's 2007 season: 117.2 rating (68.9% completion, 8.3 YPA, 8.7% TD rate, 1.4% INT rate)",
      relatedTerms: ["QBR", "Completion Percentage", "Yards Per Attempt"]
    },
    {
      term: "Yards Per Attempt (YPA)",
      definition: "Total passing yards divided by total attempts. Measures how far the ball travels per throw.",
      example: "300 yards on 30 attempts = 10.0 YPA (excellent). Like averaging 10 yards per play in football terms.",
      relatedTerms: ["Air Yards", "YAC", "ANY/A"]
    },
    {
      term: "Adjusted Net Yards per Attempt (ANY/A)",
      definition: "YPA adjusted for sacks and touchdowns/interceptions. More comprehensive than basic YPA.",
      example: "Takes basic YPA, adds 20 yards for each TD, subtracts 45 for each INT, subtracts sack yards.",
      relatedTerms: ["Net Yards per Attempt", "Quarterback Rating", "EPA"]
    },
    {
      term: "Red Zone Efficiency",
      definition: "Percentage of red zone possessions that result in touchdowns (not just field goals).",
      example: "If a team reaches the red zone 10 times and scores TDs on 6, that's 60% red zone TD efficiency.",
      relatedTerms: ["Goal Line", "Scoring Percentage", "Red Zone Attempts"]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                📚 Course Resources Hub
              </h1>
              <p className="text-blue-100">
                Your complete toolkit for mastering football analytics
              </p>
            </div>
            <div className="text-6xl opacity-20">
              🏈
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filter */}
      <Card className="bg-white/70 backdrop-blur-sm border-blue-200">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search resources, discussions, or terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              >
                <option value="all">All Categories</option>
                <option value="downloads">Downloads</option>
                <option value="links">External Links</option>
                <option value="discussions">Discussions</option>
                <option value="help">Help & FAQs</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="downloads" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="downloads" className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Downloads</span>
          </TabsTrigger>
          <TabsTrigger value="links" className="flex items-center space-x-2">
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">Links</span>
          </TabsTrigger>
          <TabsTrigger value="discussions" className="flex items-center space-x-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Community</span>
          </TabsTrigger>
          <TabsTrigger value="faqs" className="flex items-center space-x-2">
            <HelpCircle className="h-4 w-4" />
            <span className="hidden sm:inline">FAQs</span>
          </TabsTrigger>
          <TabsTrigger value="glossary" className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Glossary</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="downloads" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {downloadableResources.map((resource, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{resource.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{resource.type}</Badge>
                        <span className="text-xs text-gray-500">{resource.size}</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-xs text-gray-600">{resource.rating}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {resource.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-4xl opacity-20">
                      {resource.type === 'PDF' ? '📄' : '📊'}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {resource.downloads.toLocaleString()} downloads
                    </span>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="links" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {externalLinks.map((link, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{link.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{link.description}</p>
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{link.category}</Badge>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-500 mr-1" />
                          <span className="text-xs text-gray-600">{link.rating}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {link.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link className="h-6 w-6 text-blue-600" />
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="discussions" className="space-y-4">
          <div className="space-y-4">
            {discussionTopics.map((topic, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-blue-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{topic.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <span>by {topic.author}</span>
                        <span>•</span>
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {topic.replies} replies
                        </div>
                        <span>•</span>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {topic.lastActivity}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">{topic.category}</Badge>
                        {topic.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      Join Discussion
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Start a New Discussion</h3>
              <p className="text-sm text-gray-600 mb-4">
                Have a question about football analytics? Want to share an insight? Start a conversation!
              </p>
              <Button>
                <MessageSquare className="h-4 w-4 mr-2" />
                New Discussion
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faqs" className="space-y-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-sm text-gray-700 mb-3">{faq.answer}</p>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="text-xs">{faq.category}</Badge>
                        <div className="flex items-center text-xs text-gray-500">
                          <Star className="h-3 w-3 text-green-500 mr-1" />
                          {faq.votes} helpful
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700">
                      👍 Helpful
                    </Button>
                    <Button size="sm" variant="ghost" className="text-gray-600">
                      💬 Comment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="glossary" className="space-y-4">
          <div className="space-y-4">
            {glossaryTerms.map((term, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm border-blue-200">
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{term.term}</h3>
                  <p className="text-gray-700 mb-3">{term.definition}</p>
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 mb-3">
                    <div className="text-sm font-medium text-blue-900 mb-1">🏈 Football Example:</div>
                    <div className="text-sm text-blue-800">{term.example}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Related Terms:</div>
                    <div className="flex flex-wrap gap-1">
                      {term.relatedTerms.map((relatedTerm, relatedIndex) => (
                        <Badge key={relatedIndex} variant="secondary" className="text-xs cursor-pointer hover:bg-blue-100">
                          {relatedTerm}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Can't Find a Term?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our glossary is constantly growing. Suggest a new term or ask for clarification!
              </p>
              <Button variant="outline">
                <HelpCircle className="h-4 w-4 mr-2" />
                Suggest a Term
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseResources;
