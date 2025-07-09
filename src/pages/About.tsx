
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CEO & Co-Founder',
      background: 'Former Stanford AI Research Lab',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c647?w=300&h=300&fit=crop&crop=face',
      bio: 'PhD in Machine Learning with 10+ years in EdTech innovation.',
    },
    {
      name: 'Marcus Chen',
      role: 'CTO & Co-Founder',
      background: 'Ex-Google AI Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'Built scalable AI systems serving millions of users worldwide.',
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Head of Education',
      background: 'Educational Psychology Expert',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: '15 years researching personalized learning methodologies.',
    },
    {
      name: 'David Park',
      role: 'Head of Product',
      background: 'Former Khan Academy',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Led product teams that served 100M+ students globally.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Personalization First',
      description: 'Every learner is unique. We believe education should adapt to the individual, not the other way around.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation in Learning',
      description: 'We continuously push the boundaries of what\'s possible in education through cutting-edge AI technology.',
    },
    {
      icon: Users,
      title: 'Accessible Education',
      description: 'Quality education should be available to everyone, regardless of background or learning style.',
    },
    {
      icon: Award,
      title: 'Excellence in Everything',
      description: 'We maintain the highest standards in content quality, user experience, and educational outcomes.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Revolutionizing Education with
                <span className="text-gradient block">AI-Powered Personalization</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 mb-8">
                We're on a mission to make learning personally relevant and engaging for every student. 
                Traditional one-size-fits-all education is broken—we're here to fix it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/how-it-works">
                  <Button size="lg" className="gradient-primary hover-lift">
                    See How We Do It
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm">
                    Contact Our Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Problem We're Solving</h2>
                <div className="space-y-4 text-lg text-slate-600">
                  <p>
                    Traditional education treats all learners the same, using generic examples and 
                    one-size-fits-all approaches that fail to engage individual interests and learning styles.
                  </p>
                  <p>
                    Students struggle to see relevance in their coursework, leading to poor engagement, 
                    high dropout rates, and missed potential.
                  </p>
                  <p>
                    The result? Millions of learners give up on subjects they could excel in, 
                    simply because the content wasn't presented in a way that resonated with them.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-4">68%</div>
                  <p className="text-red-800 font-medium mb-4">of online learners never complete their courses</p>
                  <div className="text-4xl font-bold text-red-600 mb-4">85%</div>
                  <p className="text-red-800 font-medium">say lack of relevance is the main reason</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-4">95%</div>
                  <p className="text-green-800 font-medium mb-4">completion rate for our courses</p>
                  <div className="text-4xl font-bold text-green-600 mb-4">4.9/5</div>
                  <p className="text-green-800 font-medium">average student satisfaction</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Revolutionary Solution</h2>
                <div className="space-y-4 text-lg text-slate-600">
                  <p>
                    LearnAI uses advanced artificial intelligence to understand each learner's interests, 
                    passions, and learning style, then dynamically generates personalized content.
                  </p>
                  <p>
                    A football fan learns data science through sports analytics. A cooking enthusiast 
                    masters programming through recipe algorithms. Every example, exercise, and assessment 
                    is tailored to what matters to the individual.
                  </p>
                  <p>
                    The result? Students stay engaged, complete courses at unprecedented rates, 
                    and develop deep understanding through personally relevant learning experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                These principles guide everything we do, from product development to customer support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-8 card-hover">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                World-class experts in AI, education, and technology, united by a passion for transforming learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 card-hover text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
                  />
                  <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-slate-600 mb-3">{member.background}</p>
                  <p className="text-sm text-slate-700">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join the Learning Revolution?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the future of education. Start your personalized learning journey today.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 hover-lift">
                Start Learning Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
