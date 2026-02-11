import ast

def analyze_python(code: str):

    review = {
        "bugs": [],
        "code_smells": [],
        "suggestions": [],
        "complexity": "O(1)"
    }

    score = 100

    # ✅ Syntax Check
    try:
        tree = ast.parse(code)
    except SyntaxError as e:
        review["bugs"].append(f"Syntax Error: {str(e)}")
        score -= 40
        return max(score, 0), review

    # ✅ Loop Detection
    loop_count = 0
    for node in ast.walk(tree):
        if isinstance(node, (ast.For, ast.While)):
            loop_count += 1

    if loop_count > 1:
        review["code_smells"].append("Nested loops detected")
        review["complexity"] = "O(n^2)"
        review["suggestions"].append("Try reducing nested loops")
        score -= 15

    # ✅ Unsafe eval detection
    if "eval(" in code:
        review["bugs"].append("Use of eval() is unsafe")
        score -= 20

    return max(score, 0), review
