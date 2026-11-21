# Multi-Platform Social Media Content Rewriter

## Description
Natural language generation utility that converts source text into tailored publication drafts optimized for LinkedIn, Twitter, and professional newsletters while maintaining core messaging.

## Live Demo
Access the live demonstration and portfolio showcase at: [https://sohail.devsil.com/projects.html](https://sohail.devsil.com/projects.html)

## Tech Stack
- Python 3.10+
- Google Generative AI / OpenAI API
- Streamlit
- Requests

## Getting Started

### Prerequisites
- Python 3.10 or higher
- Git version control

### Installation and Setup
1. Clone the repository:
```bash
git clone https://github.com/sohailahmed-bsrh/social-media-content-rewriter.git
cd social-media-content-rewriter
```

2. Configure environment and dependencies:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
streamlit run app.py
```

## Environment Variables

Configure the following environment variables in a `.env` file at the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

## Architecture and Project Structure
The repository is structured according to modular engineering standards:

```text
social-media-content-rewriter/
|-- src/
|-- data/
|-- .gitignore
|-- README.md
`-- requirements.txt
```

## Interface and Verification
The system produces verifiable execution logs, data summaries, or interactive interfaces depending on the execution target. Validate operation by running the test suite or local entrypoint.

## Author
Developed by Sohail Ahmed ([Portfolio](https://sohail.devsil.com) | [GitHub](https://github.com/sohailahmed-bsrh)).
