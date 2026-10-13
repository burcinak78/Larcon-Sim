var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHealthChecks();

var app = builder.Build();

// Liveness: konteyner healthcheck'i ve LB bu endpoint'i kullanır.
app.MapHealthChecks("/health");

app.MapGet("/", () => Results.Ok(new { service = "larcon-api", status = "ok" }));

app.Run();

// WebApplicationFactory (entegrasyon testleri) için.
public partial class Program;
