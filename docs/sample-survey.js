{
  "sections": [
    {
      "title": "About you",
      "questions": [
        {
          "label": "name",
          "type": "string",
          "attributes": [],
          "prompt": "My name is",
          "placeholder": "Name and surname",
          "minWords": "2"
        },
        {
          "label": "email",
          "type": "email",
          "attributes": [],
          "prompt": "and my email is"
        },
        {
          "label": "location",
          "type": "question",
          "attributes": [
            {
              "title": "New York",
              "type": "attribute",
              "value": "NY"
            },
            {
              "title": "London",
              "type": "attribute",
              "value": "LON"
            },
            {
              "title": "Paris, France",
              "type": "attribute",
              "value": "PAR"
            }
          ],
          "prompt": "working in",
          "match": "office"
        },
        {
          "label": "duration",
          "type": "question",
          "attributes": [
            {
              "title": "1-3 years",
              "type": "attribute"
            },
            {
              "title": "3-5 years",
              "type": "attribute"
            },
            {
              "title": "5+ years",
              "type": "attribute"
            }
          ],
          "prompt": "I've been working in the industry for",
          "placeholder": "Choose duration"
        },
        {
          "label": "gender",
          "type": "question",
          "attributes": [
            {
              "title": "Male",
              "type": "attribute"
            },
            {
              "title": "Female",
              "type": "attribute"
            },
            {
              "title": "Non binary",
              "type": "attribute"
            },
            {
              "title": "Prefer not to say",
              "type": "attribute"
            }
          ],
          "prompt": "I am a",
          "placeholder": "Choose gender"
        },
        {
          "label": "Paris Office",
          "type": "question",
          "attributes": [
            {
              "title": "Gare du Lyon",
              "type": "attribute"
            },
            {
              "title": "Bastille",
              "type": "attribute"
            },
            {
              "title": "Sacre Coeur",
              "type": "attribute"
            }
          ],
          "prompt": "Which Paris office?",
          "if": "location=PAR"
        },
        {
          "label": "London Office",
          "type": "question",
          "attributes": [
            {
              "title": "Paddington",
              "type": "attribute"
            },
            {
              "title": "Knightsbridge",
              "type": "attribute"
            },
            {
              "title": "Notting Hill",
              "type": "attribute"
            }
          ],
          "prompt": "Which London office?",
          "if": "location=LON",
          "multi": "false"
        }
      ],
      "type": "section",
      "flow": "inline"
    },
    {
      "title": "About mentoring",
      "questions": [
        {
          "label": "role",
          "type": "question",
          "attributes": [
            {
              "title": "often asked for advice (I am a mentor)",
              "type": "attribute",
              "value": "mentor"
            },
            {
              "title": "keen to further my career (I am a mentee)",
              "type": "attribute",
              "value": "mentee"
            },
            {
              "title": "Interested in both giving advice and furthering my career",
              "type": "attribute",
              "value": "either"
            }
          ],
          "prompt": "I am"
        }
      ],
      "type": "section"
    }
  ],
  "info": {
    "surveyfile": "docs/sample-survey.txt",
    "outfile": "docs/sample-survey.js",
    "when": "2018-03-14T22:01:48.543Z"
  }
};
