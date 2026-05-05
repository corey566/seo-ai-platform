export function validateDomain(domain: string) {
  const regex = /^(https?:\/\/)?([\w.-]+)+(:\d+)?(\/([\w/_-]+))*$/;

  if (!regex.test(domain)) {
    throw new Error("Invalid domain");
  }

  return domain;
}