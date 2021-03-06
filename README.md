# Project Overview

## Character Sheet Generator
[Deployed Site](https://cocky-euler-406a02.netlify.app/build)

## Project Description

An app that allows users to generate character sheets for various homebrew campaigns, and any other reasons they might want to have a custom character sheet. The Apple have several sample buttons that will allow the user to start with pre-generated information and then edit and save that information to create their character. If they wish they can also start with a blank character sheet and create a completely custom character from scratch.

## Wireframes
![Wireframe Decktop](https://i.imgur.com/e1nke9r.jpg)
![Wireframe Decktop](https://i.imgur.com/0JpPhwB.jpg)
![Wireframe Decktop](https://i.imgur.com/FeoBLO3.jpg)
![Wireframe Tablet](https://i.imgur.com/b92czmW.jpg)
![Wireframe Mobile](https://i.imgur.com/CoxAiVc.jpg)

## Component Hierarchy
![Hierarchy](https://i.imgur.com/LWGsKAH.jpg)

## API and Data Sample

```
{
    "records": [
        {
            "id": "recFwQTPvGnbXMWow",
            "fields": {
                "characterName": "Dern",
                "class": "Cleric",
                "characterLevel": "5",
                "race": "Dwarf",
                "dex": "10",
                "str": "10",
                "con": "10",
                "int": "10",
                "wis": "10",
                "cha": "10"
            },
            "createdTime": "2020-10-08T20:02:53.000Z"
        },
        {
            "id": "recHvtdBrnxJlipDp",
            "fields": {},
            "createdTime": "2020-10-08T20:02:53.000Z"
        },
        {
            "id": "rec1SYcMWdVeXsmim",
            "fields": {},
            "createdTime": "2020-10-08T20:02:53.000Z"
        }
    ],
    "offset": "rec1SYcMWdVeXsmim"
}
```

### MVP/PostMVP

#### MVP 

- Populate air table with custom info for character sheets
- Allow user to create and save new character sheets
- Have options of pregenerated character sheets
- Allow user to enter additional character information 
- Allow user to enter campaign notes

#### PostMVP  

- Damage and defense calculators
- Multiclass options
- Ability to add custom equipment

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 7-8| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|July 9| Project Approval | Complete
|July 10| Populating air table / Core game rules | Complete
|July 11| Initial Clickable Model / Test fields | Complete
|July 12| CSS styling / Page layout | Complete
|July 13| MVP | Complete
|July 14| MVP Corrections / Post MVP | Incomplete
|July 15| Post MVP | Incomplete
|July 16| Presentation | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Deciding core rules | H | 3hrs| 8hrs | 8hrs |
| Populating air table | H | 3hrs| 3hrs | 3hrs |
| Creating Sheet components | H | 2hrs| 3hrs | 3hrs |
| Get post functionality | H | 2hrs| 3hrs | 3hrs |
| Route and link | H | 3hrs| 2hrs | 2hrs |
| CSS page styling | H | 6hrs| 12hrs | 12hrs |
| Media queries styling | L | 3hrs| 1hrs | 1hrs |
| Creating sample sheets | M | 3hrs| 1hrs | 1hrs |
| Calculator components | H | 4hrs| 3hrs | 3hrs |
| Drop-down integration | H | 4hrs| 4hrs | 4hrs |
| Total | H | 33hrs| 40hrs | 40hrs |

## SWOT Analysis

### Strengths:
I'm very logical based so I believe coming up with the game structure and populating the air table will be easy.
### Weaknesses:
I am very weak when it comes to CSS and styling so creating a character sheet layout that looks good will be challenging for me.
### Opportunities:
I think that this will be a fun project that integrates things that I love to do in my free time with practical skill applications.
### Threats:
Imposter syndrome, general procrastination.

[Issue Ticket](https://forms.gle/CiYgaUhh24Sz35RRA)