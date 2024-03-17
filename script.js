function generateMatrices() {
        const matrixARows = parseInt(document.getElementById('matrixARows').value, 10);
        const matrixACols = parseInt(document.getElementById('matrixACols').value, 10);
        const matrixBRows = parseInt(document.getElementById('matrixBRows').value, 10);
        const matrixBCols = parseInt(document.getElementById('matrixBCols').value, 10);
    
        const matrixA = document.getElementById('matrixA');
        const matrixB = document.getElementById('matrixB');
    
        matrixA.innerHTML = '<h3>Matrix A</h3>';
        matrixB.innerHTML = '<h3>Matrix B</h3>';
    
        for (let i = 0; i < matrixARows; i++) {
            const row = document.createElement('div');
            for (let j = 0; j < matrixACols; j++) {
                row.innerHTML += `<input type="number" value="0"> `;
            }
            matrixA.appendChild(row);
        }
    
        for (let i = 0; i < matrixBRows; i++) {
            const row = document.createElement('div');
            for (let j = 0; j < matrixBCols; j++) {
                row.innerHTML += `<input type="number" value="0"> `;
            }
            matrixB.appendChild(row);
        }
    }
    
    function performOperation(operation) {
        const matrixA = getMatrixValues('matrixA');
        const matrixB = getMatrixValues('matrixB');
        let result;
    
        switch(operation) {
            case 'addition':
                result = addMatrices(matrixA, matrixB);
                break;
            case 'subtraction':
                result = subtractMatrices(matrixA, matrixB);
                break;
            case 'multiplication':
                result = multiplyMatrices(matrixA, matrixB);
                break;
            default:
                alert('Invalid operation');
                return;
        }
    
        displayResult(result);
    }
    
    function getMatrixValues(matrixId) {
        const matrix = [];
        const inputs = document.getElementById(matrixId).getElementsByTagName('input');
        const rows = inputs.length / inputs[0].parentNode.children.length;
    
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < inputs[0].parentNode.children.length; j++) {
                row.push(parseInt(inputs[i * inputs[0].parentNode.children.length + j].value, 10));
            }
            matrix.push(row);
        }
    
        return matrix;
    }
    
    function addMatrices(matrixA, matrixB) {
        const result = [];
        for (let i = 0; i < matrixA.length; i++) {
            const row = [];
            for (let j = 0; j < matrixA[0].length; j++) {
                row.push(matrixA[i][j] + matrixB[i][j]);
            }
            result.push(row);
        }
        return result;
    }
    
    function subtractMatrices(matrixA, matrixB) {
        const result = [];
        for (let i = 0; i < matrixA.length; i++) {
            const row = [];
            for (let j = 0; j < matrixA[0].length; j++) {
                row.push(matrixA[i][j] - matrixB[i][j]);
            }
            result.push(row);
        }
        return result;
    }
    
    function multiplyMatrices(matrixA, matrixB) {
        const result = [];
        for (let i = 0; i < matrixA.length; i++) {
            const row = [];
            for (let j = 0; j < matrixB[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < matrixA[0].length; k++) {
                    sum += matrixA[i][k] * matrixB[k][j];
                }
                row.push(sum);
            }
            result.push(row);
        }
        return result;
    }
    
    function displayResult(resultMatrix) {
        const matrixResult = document.getElementById('matrixResult');
        matrixResult.innerHTML = '<h3>Result Matrix</h3>';
        resultMatrix.forEach(row => {
            const rowDiv = document.createElement('div');
            row.forEach(cell => {
                rowDiv.innerHTML += `${cell} `;
            });
            matrixResult.appendChild(rowDiv);
        });
    }
    