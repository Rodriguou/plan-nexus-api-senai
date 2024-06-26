const { z, string } = require("zod")

const alunoUnicoValidacao = z.object({
    CPF: z.string().length(11, "O cpf precisa ter 11 digitos").min(1, "Cpf não pode estar vazio"),
    nome: z.string().min(1, "Nome não pode estar vazio"),
    email: z.string().email("Email inválido.").min(1, "Email não pode estar vazio"),
    fk_curso: z.string().min(1, "Curso não pode estar vazio"),
    socioAapm: z.enum(["false","true"]),
    telefone: z.string().optional(),
    celular: z.string().min(1,"Número de celular obrigatório")
})

const funcionarioValidacao = z.object({
    idFuncionario: z.string().optional(),
    NIF: z.string().min(1).max(20),
    nome: z.string().min(1).max(50),
    email: z.string().email().max(100),
    nivel_acesso: z.string().min(1).max(3),
});



const validacoesGerais = {
    CPF: z.string().length(11, "O cpf precisa ter 11 digitos").min(1, "Cpf não pode estar vazio"),
    nome: z.string().min(1, "Nome não pode estar vazio"),
    email: z.string().email("Email inválido.").min(1, "Email não pode estar vazio"),
    fk_curso: z.string().min(1, "Curso não pode estar vazio"),

}

const produtoValidacao = z.object({
    nome: z.string().min(1, "O nome não pode estar vazio"),
    cores: z.array(z.string()).min(1, "As cores não podem estar vazias"),
    tamanhos: z.array(z.string()).min(1, "Os tamanhos não podem estar vazios"),
    valor: z.number().min(1, "O valor não pode estar vazio"),
    desconto: z.number().min(1, "O desconto não pode estar vazio"),
    descricao: z.string().max(150).nullable(),
    brinde: z.enum(["false","true"])
  });



module.exports = { alunoUnicoValidacao, validacoesGerais, produtoValidacao, funcionarioValidacao }