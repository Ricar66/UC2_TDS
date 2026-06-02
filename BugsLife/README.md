# Desafio Git: Código Quebrado

Repositório de treino para a Unidade Curricular 2 do curso Técnico em Desenvolvimento de Sistemas.

Os projetos deste repositório são miniaplicações em HTML e JavaScript com bugs propositais. A ideia é praticar o fluxo de trabalho com Git:

1. Clonar o repositório.
2. Escolher ou receber tickets.
3. Criar uma branch para cada correção.
4. Corrigir o bug indicado.
5. Fazer commit da correção.
6. Voltar para `main`.
7. Criar outra branch para o próximo ticket.
8. Fazer push das branches para o GitHub.

## Fluxo sugerido

```bash
git clone <url-do-repositorio>
cd <nome-do-repositorio>
git switch -c fix/nome-do-ticket
```

Depois de corrigir:

```bash
git add .
git commit -m "Corrige nome do ticket"
git push -u origin fix/nome-do-ticket
git switch main
```

## Projetos

- `01-cinema`
- `02-revenda`
- `03-restaurante`
- `04-farmacia`
- `05-lanhouse`
- `06-supermercado`
- `07-media-aluno`
- `08-temperatura`
- `09-medidas`
- `10-adivinhacao`
- `11-imc`
- `12-caixa-eletronico`
- `13-desconto-loja`
- `14-tabuada`
- `15-juros-simples`
- `16-par-ou-impar`

Cada projeto possui 2 bugs intencionais, totalizando 32 tickets.

## Arquivos do professor

- `TICKETS.md`: lista de tickets para distribuir aos alunos.
- `GABARITO.md`: correções esperadas para consulta do professor.
