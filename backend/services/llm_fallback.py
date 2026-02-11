from google import genai
import json
import re

client = genai.Client(api_key="AIzaSyD5IQYgB_MubLXkWd14XCH-WA8j4cqTuZw")

def extract_json(text):
    text = re.sub(r"```json", "", text)
    text = re.sub(r"```", "", text)
    match = re.search(r'\{.*\}', text, re.DOTALL)
    return match.group() if match else None

def analyze_with_llm(code: str, language: str):
    review = {
        "bugs": [],
        "code_smells": [],
        "suggestions": [],
        "complexity": "Unknown"
    }
    score = 100

    prompt = f"""
    Analyze the following {language} code.

    Respond ONLY with valid JSON.

    {{
      "bugs": [],
      "code_smells": [],
      "suggestions": [],
      "complexity": "O(?)"
    }}

    Code:
    {code}
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash-exp",  # Using stable model
            contents=prompt
        )
        
        raw_text = response.text
        json_text = extract_json(raw_text)

        if json_text:
            review = json.loads(json_text)
            if review.get("bugs"):
                score -= 40
            if review.get("code_smells"):
                score -= 15
        else:
            review["bugs"].append("Invalid format")
            score -= 30

    except Exception as e:
        review["bugs"].append(f"Analysis error: {str(e)}")
        score -= 30

    return max(score, 0), review